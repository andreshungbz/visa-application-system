// Filename: reviewer-controller.ts
// controllers for reviewer-route.ts

import { Request, Response } from 'express';
import { vs } from '../main.js';

// renders reviewer dashboard
export const getReviewerDashboard = (_req: Request, res: Response) => {
  const initialCount = vs.getInitialQueue().length;
  const interviewCount = vs.getInterviewQueue().length;
  const finalCount = vs.getFinalQueue().length;

  res.render('reviewer/dashboard', {
    initialCount,
    interviewCount,
    finalCount,
    totalCount: initialCount + interviewCount + finalCount,
  });
};
