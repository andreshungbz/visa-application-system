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
          break;
        case VisaStatus.Interview:
          application.setStatus(VisaStatus.Final);
          application.setS2Reviewer(this.getFullName());
          application.setS2Notes(notes);
          break;
        case VisaStatus.Final:
          application.setStatus(VisaStatus.Approved);
          application.setS3Reviewer(this.getFullName());
          application.setS3Notes(notes);
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

      // update in-memory array
      application.setStatus(VisaStatus.Rejected);
      application.setS3Reviewer(this.getFullName());
      application.setS3Notes(notes);

      // update database record
      await updateStatus(
        VisaStatus.Initial,
        applicationNumber,
        this.getFullName(),
        notes
      );
    } catch (error) {
      console.error(error);
    }
  }
}
