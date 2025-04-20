// Filename: apply-controller.ts
// controllers for apply-route.ts

import { Request, Response } from 'express';

// renders apply page
export const getApply = (_req: Request, res: Response) => {
  res.render('apply');
};

// renders b1 form
export const getApplyB1 = (_req: Request, res: Response) => {
  res.render('form-b1');
};
