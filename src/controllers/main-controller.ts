// Filename: main-controller.ts
// controllers for main-route.ts

import { Request, Response } from 'express';

import { vs } from '../main.js';
import { VisaStatus } from '@prisma/client';

// renders home page
export const getIndex = (_req: Request, res: Response) => {
  res.render('index');
};

// displays the status of a visa application if it exists
export const getStatus = (req: Request, res: Response) => {
  const id = Number(req.query.id);
  if (isNaN(id)) {
    return res.render('error', {
      message: `Invalid Application Number (${req.query.id})`,
    });
  }

  const applicationStatus = vs.getVisaApplicationStatus(id);
  if (!applicationStatus) {
    return res.render('error', {
      message: `Application #${id} Not Found`,
    });
  }

  const status =
    applicationStatus +
    (applicationStatus === VisaStatus.Initial ||
    applicationStatus === VisaStatus.Interview ||
    applicationStatus === VisaStatus.Final
      ? ' Stage'
      : '');

  res.render('status', { id, status });
};

// renders apply page
export const getApply = (_req: Request, res: Response) => {
  res.render('apply');
};
