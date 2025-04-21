// Filename: reviewer-controller.ts
// controllers for reviewer-route.ts

import { Request, Response } from 'express';
import { es, vs } from '../main.js';
import { VisaStatus, VisaType } from '@prisma/client';
import { VisaReviewer } from '../models/classes/employees/visa-reviewer/VisaReviewer.js';

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

// renders application process page
export const getProcess = (req: Request, res: Response) => {
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
    case VisaStatus.Initial:
      prevStatus = 'initial';
      break;
    case VisaStatus.Interview:
      prevStatus = 'interview';
      break;
    case VisaStatus.Final:
      prevStatus = 'final';
      break;
    default:
      return res.render('error', { message: 'Invalid Visa Status' });
  }

  res.render('reviewer/process', {
    application,
    prev: prevStatus,
    isB1: application.getType() === VisaType.B1,
    isB2: application.getType() === VisaType.B2,
    isF1: application.getType() === VisaType.F1,
    editable: false,
  });
};

// moves application to the next stage
export const postApproveApplication = async (req: Request, res: Response) => {
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

  const reviewerID = Number(req.body.reviewerID);

  if (isNaN(reviewerID)) {
    return res.render('error', { message: 'Invalid Reviewer ID' });
  }

  const reviewer = es.getEmployee(reviewerID);

  if (!reviewer) {
    return res.render('error', {
      message: `Reviewer with ID ${id} Not Found`,
    });
  }

  if (!(reviewer instanceof VisaReviewer)) {
    return res.render('error', {
      message: `ID ${id} Does Not Belong to a Visa Reviewer`,
    });
  }

  const notes = req.body.notes;

  if (!notes) {
    return res.render('error', {
      message: `Notes Empty`,
    });
  }

  try {
    await reviewer.approveApplicationStage(id, notes);
    res.redirect('/reviewer/dashboard');
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Internal Server Error' });
  }
};

// rejects application
export const postRejectApplication = async (req: Request, res: Response) => {
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

  const reviewerID = Number(req.body.reviewerID);

  if (isNaN(reviewerID)) {
    return res.render('error', { message: 'Invalid Reviewer ID' });
  }

  const reviewer = es.getEmployee(reviewerID);

  if (!reviewer) {
    return res.render('error', {
      message: `Reviewer with ID ${id} Not Found`,
    });
  }

  if (!(reviewer instanceof VisaReviewer)) {
    return res.render('error', {
      message: `ID ${id} Does Not Belong to a Visa Reviewer`,
    });
  }

  const notes = req.body.notes;

  if (!notes) {
    return res.render('error', {
      message: `Notes Empty`,
    });
  }

  try {
    await reviewer.rejectApplication(id, notes);
    res.redirect('/reviewer/dashboard');
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Internal Server Error' });
  }
};
