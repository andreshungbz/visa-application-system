// Filename: main-controller.ts
// controllers for main-route.ts

import { Request, Response } from 'express';
import { vs } from '../main.js';

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

  const status = vs.getVisaApplicationStatus(id);
  if (!status) {
    return res.render('error', {
      message: `Application #${id} Not Found`,
    });
  }

  res.render('status', { id, status });
};
