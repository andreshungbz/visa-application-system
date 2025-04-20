// Filename: apply-controller.ts
// controllers for apply-route.ts

import { Request, Response } from 'express';
import {
  emptyB1Application,
  emptyB2Application,
  emptyF1Application,
} from '../utils/empty.js';
import { validateForm } from '../utils/validate.js';
import { vs } from '../main.js';
import { VisaType } from '@prisma/client';

// renders apply page
export const getApply = (_req: Request, res: Response) => {
  res.render('apply');
};

// renders b1 application form
export const getApplyB1 = (_req: Request, res: Response) => {
  res.render('apply-b1', { application: emptyB1Application, editable: true });
};

// renders b2 application form
export const getApplyB2 = (_req: Request, res: Response) => {
  res.render('apply-b2', { application: emptyB2Application, editable: true });
};

// renders f1 application form
export const getApplyF1 = (_req: Request, res: Response) => {
  res.render('apply-f1', { application: emptyF1Application, editable: true });
};

// adds b1 application form
export const postB1 = async (req: Request, res: Response) => {
  const form = validateForm(req, vs.nextApplicationNumber, VisaType.B1);

  if (!form) {
    return res.render('error', { message: 'Form Validation Error' });
  }

  try {
    const newID = await vs.addVisaApplication(form);
    res.render('apply-success', { id: newID });
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Internal Server Error' });
  }
};
