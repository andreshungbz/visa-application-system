// Filename: supervisor-controller.ts
// controllers for supervisor-route.ts

import { Request, Response } from 'express';

// renders supervisor dashboard
export const getSupervisorDashboard = (_req: Request, res: Response) => {
  res.render('supervisor/dashboard');
};
