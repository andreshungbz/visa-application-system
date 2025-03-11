// Visa Reviwer Concrete Class (Implementation)

import { Employee } from '../abstract/Employee';
import { IVisaReviewer } from './IVisaReviewer';

import { VisaApplication } from '../../visa-application/VisaApplication';
import { VisaStatus } from '../../../enums/visa-status';

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

  // OVERRIDES

  insertRecord(): boolean {
    return true;
  }

  // MAIN FUNCTIONS

  approveApplicationStage(
    application: VisaApplication,
    notes: string
  ): boolean {
    switch (application.getStatus()) {
      case VisaStatus.InitialStage:
        application.setStatus(VisaStatus.InterviewStage);
        application.setS1Reviewer(String(this.getEmployeeNumber()));
        application.setS1Notes(notes);
        return true;
      case VisaStatus.InterviewStage:
        application.setStatus(VisaStatus.FinalStage);
        application.setS2Reviewer(String(this.getEmployeeNumber()));
        application.setS2Notes(notes);
        return true;
      case VisaStatus.FinalStage:
        application.setStatus(VisaStatus.Accepted);
        application.setS3Reviewer(String(this.getEmployeeNumber()));
        application.setS3Notes(notes);
        return true;
      default:
        return false;
    }
  }

  rejectApplication(application: VisaApplication, notes: string): boolean {
    application.setStatus(VisaStatus.Rejected);
    application.setS3Reviewer(String(this.getEmployeeNumber()));
    application.setS3Notes(notes);
    return true;
  }
}
