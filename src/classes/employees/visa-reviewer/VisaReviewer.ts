// Visa Reviewer Concrete Class (Implementation)

import { Employee } from '../abstract/Employee.js';
import { IVisaReviewer } from './IVisaReviewer.js';

import { VisaStatus } from '../../../enums/visa-status.js';

import { vs } from '../../../app.js';

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

  async approveApplicationStage(
    applicationNumber: number,
    notes: string
  ): Promise<boolean> {
    const application = vs.getFullVisaApplication(applicationNumber);
    if (!application) return false;

    switch (application.getStatus()) {
      case VisaStatus.InitialStage:
        application.setStatus(VisaStatus.InterviewStage);
        application.setS1Reviewer(String(this.getEmployeeNumber()));
        application.setS1Notes(notes);
        break;
      case VisaStatus.InterviewStage:
        application.setStatus(VisaStatus.FinalStage);
        application.setS2Reviewer(String(this.getEmployeeNumber()));
        application.setS2Notes(notes);
        break;
      case VisaStatus.FinalStage:
        application.setStatus(VisaStatus.Approved);
        application.setS3Reviewer(String(this.getEmployeeNumber()));
        application.setS3Notes(notes);
        break;
    }

    vs.updateVisaApplication(application);

    return true;
  }

  async rejectApplication(
    applicationNumber: number,
    notes: string
  ): Promise<boolean> {
    const application = vs.getFullVisaApplication(applicationNumber);
    if (!application) return false;

    application.setStatus(VisaStatus.Rejected);
    application.setS3Reviewer(String(this.getEmployeeNumber()));
    application.setS3Notes(notes);

    vs.updateVisaApplication(application);

    return true;
  }
}
