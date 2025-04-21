// Filename: supervisor-controller.ts
// controllers for supervisor-route.ts

import { Request, Response } from 'express';
import argon2 from 'argon2';

import { es, vs } from '../main.js';
import { VisaStatus, VisaType } from '@prisma/client';
import { VisaReviewer } from '../models/classes/employees/visa-reviewer/VisaReviewer.js';

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

// renders application view page
export const getView = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.render('error', { message: 'Invalid Application Number' });
  }

  const application = vs.getFullVisaApplication(id);

  if (!application) {
    return res.render('error', {
      message: `Application with ID ${id} Not Found`,
    });
  }

  let prevStatus: string;
  switch (application.getStatus()) {
    case VisaStatus.Approved:
      prevStatus = 'approved';
      break;
    case VisaStatus.Rejected:
      prevStatus = 'rejected';
      break;
    default:
      return res.render('error', { message: 'Invalid Visa Status' });
  }

  console.log(application.getS1Reviewer());

  res.render('supervisor/view', {
    application,
    prev: prevStatus,
    isB1: application.getType() === VisaType.B1,
    isB2: application.getType() === VisaType.B2,
    isF1: application.getType() === VisaType.F1,
    isInterview: false,
    isFinal: false,
    isFinished: true,
    s1Reviewer: application.getS1Reviewer(),
    s1Notes: application.getS1Notes(),
    s2Reviewer: application.getS2Reviewer(),
    s2Notes: application.getS2Notes(),
    s3Reviewer: application.getS3Reviewer(),
    s3Notes: application.getS3Notes(),
    editable: false,
  });
};

// renders reviewers list
export const getReviewers = (_req: Request, res: Response) => {
  const reviewers = es
    .getEmployees()
    .filter((employee) => employee instanceof VisaReviewer);

  res.render('supervisor/reviewers', { reviewers, total: reviewers.length });
};

// adds new reviewer
export const postAddReviewer = async (req: Request, res: Response) => {
  const { firstName, lastName, ssn, salary, password } = req.body;

  if (!firstName || !lastName || !ssn || isNaN(Number(salary)) || !password) {
    return res.render('error', { message: 'Field Was Missing' });
  }

  try {
    const hashedPassword = await argon2.hash(password);
    const newReviewer = new VisaReviewer(
      es.nextEmployeeNumber++,
      firstName,
      lastName,
      ssn,
      hashedPassword,
      Number(salary)
    );

    await es.addEmployee(newReviewer);
    res.redirect('/supervisor/reviewers');
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Internal Server Error' });
  }
};
