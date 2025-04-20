// Filename: main-controller.ts
// controllers for main-route.ts

import { Request, Response } from 'express';

// renders home page
export const getIndex = (_req: Request, res: Response) => {
  res.render('index');
};
