// Filename: reviewer-controller.ts
// controllers for reviewer-route.ts

import { Request, Response } from 'express';
import { vs } from '../main.js';
import { VisaStatus } from '@prisma/client';

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

// renders application queue
export const getQueue = (req: Request, res: Response) => {
  const stage = req.query.stage;

  switch (stage) {
    case 'initial':
      const queue = vs.getInitialQueue();

      queue.sort(
        (a, b) => a.getUpdatedAt().getTime() - b.getUpdatedAt().getTime()
      );

      return res.render('reviewer/queue', {
        stage: VisaStatus.Initial,
        description:
          'These are the initial applications submitted by individuals. Check for errors and inconsistencies.',
        total: queue.length,
        applications: queue,
      });
    case 'interview':
      return res.render('reviewer/queue');
    case 'final':
      return res.render('reviewer/queue');
    default:
      return res.render('error', { message: 'Invalid Queue' });
  }
};
