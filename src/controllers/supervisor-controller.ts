// Filename: supervisor-controller.ts
// controllers for supervisor-route.ts

import { Request, Response } from 'express';

import { vs } from '../main.js';
import { VisaStatus } from '@prisma/client';

// renders supervisor dashboard
export const getSupervisorDashboard = (_req: Request, res: Response) => {
  res.render('supervisor/dashboard');
};

// renders application list
export const getList = (req: Request, res: Response) => {
  const status = req.query.status;

  switch (status) {
    case 'approved':
      const approvedApplications = vs.getApproved();

      approvedApplications.sort(
        (a, b) => a.getUpdatedAt().getTime() - b.getUpdatedAt().getTime()
      );

      return res.render('supervisor/list', {
        stage: VisaStatus.Approved,
        description:
          'These are the applications that have passed all three stages',
        total: approvedApplications.length,
        applications: approvedApplications,
      });
    case 'rejected':
      const rejectedApplications = vs.getRejected();

      rejectedApplications.sort(
        (a, b) => a.getUpdatedAt().getTime() - b.getUpdatedAt().getTime()
      );

      return res.render('supervisor/list', {
        stage: VisaStatus.Rejected,
        description: 'These applications have been rejected at any stage.',
        total: rejectedApplications.length,
        applications: rejectedApplications,
      });
    default:
      return res.render('error', { message: 'Invalid List' });
  }
};
