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
      const initialQueue = vs.getInitialQueue();

      initialQueue.sort(
        (a, b) => a.getUpdatedAt().getTime() - b.getUpdatedAt().getTime()
      );

      return res.render('reviewer/queue', {
        stage: VisaStatus.Initial,
        description:
          'These are the initial applications submitted by individuals. Check for errors and inconsistencies.',
        total: initialQueue.length,
        applications: initialQueue,
      });
    case 'interview':
      const interviewQueue = vs.getInterviewQueue();

      interviewQueue.sort(
        (a, b) => a.getUpdatedAt().getTime() - b.getUpdatedAt().getTime()
      );

      return res.render('reviewer/queue', {
        stage: VisaStatus.Interview,
        description:
          'These applications are to be reviewed after the applicant conducts their interview at the embassy.',
        total: interviewQueue.length,
        applications: interviewQueue,
      });
    case 'final':
      const finalQueue = vs.getFinalQueue();

      finalQueue.sort(
        (a, b) => a.getUpdatedAt().getTime() - b.getUpdatedAt().getTime()
      );

      return res.render('reviewer/queue', {
        stage: VisaStatus.Final,
        description:
          'This is the last step before approval. Review the overall application one final time.',
        total: finalQueue.length,
        applications: finalQueue,
      });
    default:
      return res.render('error', { message: 'Invalid Queue' });
  }
};
