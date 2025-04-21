// Visa Reviewer Concrete Class (Implementation)

import { Employee } from '../abstract/Employee.js';
import { IVisaReviewer } from './IVisaReviewer.js';

import { VisaStatus } from '@prisma/client';

import { vs } from '../../../../main.js';
import { updateStatus } from '../../../visa-application-model.js';

export class VisaReviewer extends Employee implements IVisaReviewer {
  // CONSTRUCTOR

  constructor(
    protected employeeNumber: number,
    protected firstName: string,
    protected lastName: string,
    protected ssn: string,
    protected password: string,
    protected salary: number
  ) {
    super(employeeNumber, firstName, lastName, ssn, password, salary);
  }

  // MAIN FUNCTIONS

  async approveApplicationStage(applicationNumber: number, notes: string) {
    try {
      const application = vs.getFullVisaApplication(applicationNumber);
      if (!application) throw new Error('Application not found.');

      const status = application.getStatus();

      // update in-memory array
      switch (status) {
        case VisaStatus.Initial:
          application.setStatus(VisaStatus.Interview);
          application.setS1Reviewer(this.getFullName());
          application.setS1Notes(notes);
          application.setUpdatedAt(new Date());

          // move application
          vs.getInitialQueue().splice(
            vs
              .getInitialQueue()
              .findIndex((a) => a.getApplicationNumber() === applicationNumber),
            1
          );
          vs.getInterviewQueue().push(application);

          break;
        case VisaStatus.Interview:
          application.setStatus(VisaStatus.Final);
          application.setS2Reviewer(this.getFullName());
          application.setS2Notes(notes);
          application.setUpdatedAt(new Date());

          // move application
          vs.getInterviewQueue().splice(
            vs
              .getInterviewQueue()
              .findIndex((a) => a.getApplicationNumber() === applicationNumber),
            1
          );
          vs.getFinalQueue().push(application);

          break;
        case VisaStatus.Final:
          application.setStatus(VisaStatus.Approved);
          application.setS3Reviewer(this.getFullName());
          application.setS3Notes(notes);
          application.setUpdatedAt(new Date());

          // move application
          vs.getFinalQueue().splice(
            vs
              .getFinalQueue()
              .findIndex((a) => a.getApplicationNumber() === applicationNumber),
            1
          );
          vs.getApproved().push(application);

          break;
        default:
          throw new Error('Invalid Visa Status.');
      }

      // update database record
      await updateStatus(status, applicationNumber, this.getFullName(), notes);
    } catch (error) {
      console.error(error);
    }
  }

  async rejectApplication(applicationNumber: number, notes: string) {
    try {
      const application = vs.getFullVisaApplication(applicationNumber);
      if (!application) throw new Error('Application not found.');

      if (
        application.getStatus() === VisaStatus.Approved ||
        application.getStatus() === VisaStatus.Rejected
      ) {
        throw new Error('Invalid Visa Status.');
      }

      // move application
      switch (application.getStatus()) {
        case VisaStatus.Initial:
          vs.getInitialQueue().splice(
            vs
              .getInitialQueue()
              .findIndex((a) => a.getApplicationNumber() === applicationNumber),
            1
          );
          break;
        case VisaStatus.Interview:
          vs.getInterviewQueue().splice(
            vs
              .getInterviewQueue()
              .findIndex((a) => a.getApplicationNumber() === applicationNumber),
            1
          );
          break;
        case VisaStatus.Final:
          vs.getFinalQueue().splice(
            vs
              .getFinalQueue()
              .findIndex((a) => a.getApplicationNumber() === applicationNumber),
            1
          );
          break;
        default:
          throw new Error('Invalid Visa Status.');
      }

      // update in-memory array
      application.setStatus(VisaStatus.Rejected);
      application.setS3Reviewer(this.getFullName());
      application.setS3Notes(notes);
      application.setUpdatedAt(new Date());
      vs.getRejected().push(application);

      // update database record
      await updateStatus(
        VisaStatus.Rejected,
        applicationNumber,
        this.getFullName(),
        notes
      );
    } catch (error) {
      console.error(error);
    }
  }
}
