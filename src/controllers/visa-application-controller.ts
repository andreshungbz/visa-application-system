// Filename: visa-application-controller.ts

import { Request, Response } from 'express';
import { vs } from '../main.js';

export const test = async (_req: Request, res: Response) => {
  const initial = vs.getInitialQueue();
  const interview = vs.getInterviewQueue();
  const final = vs.getFinalQueue();

  console.log(initial);
  console.log(interview);
  console.log(final);

  res.send('test');
};
