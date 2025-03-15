// Visa System Concrete Class (Implementation)

import { IVisaSystem } from './IVisaSystem';

import { VisaApplication } from '../visa-application/VisaApplication';
import { VisaForm } from '../visa-forms/abstract/VisaForm';

import { VisaStatus } from '../../enums/visa-status';
import { VisaType } from '../../enums/visa-type';

import {
  readS1VisaApplications,
  readS2VisaApplications,
  readS3VisaApplications,
} from '../../models/visa-application-model';
import { B1Form } from '../visa-forms/B1/B1Form';
import { B2Form } from '../visa-forms/B2/B2Form';
import { F1Form } from '../visa-forms/F1/F1Form';

export class VisaSystem implements IVisaSystem {
  // PROPERTIES (DATA MEMBERS)

  private initialQueue: VisaApplication[];
  private interviewQueue: VisaApplication[];
  private finalQueue: VisaApplication[];

  // CONSTRUCTOR

  constructor() {
    this.initialQueue = readS1VisaApplications();
    this.interviewQueue = readS2VisaApplications();
    this.finalQueue = readS3VisaApplications();
  }

  // MAIN METHODS

  getInitialQueue(): VisaApplication[] {
    return this.initialQueue;
  }

  getInterviewQueue(): VisaApplication[] {
    return this.interviewQueue;
  }

  getFinalQueue(): VisaApplication[] {
    return this.finalQueue;
  }

  addVisaApplication(form: VisaForm): number {
    let visaType: VisaType | null;

    if (form instanceof B1Form) {
      visaType = VisaType.B1;
    } else if (form instanceof B2Form) {
      visaType = VisaType.B2;
    } else if (form instanceof F1Form) {
      visaType = VisaType.F1;
    } else {
      visaType = null;
    }

    if (!visaType) {
      return -1;
    }

    const application = new VisaApplication(
      1,
      visaType,
      VisaStatus.InitialStage,
      form
    );

    // ADD TO CLASS MEMORY
    this.initialQueue.push(application);

    // WRITE TO DATABASE
    application.syncVARecord();

    return 1;
  }

  getVisaApplicationStatus(applicationNumber: number): VisaStatus | null {
    let applicationIndex: number;

    applicationIndex = this.initialQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.initialQueue[applicationIndex].getStatus();
    }

    applicationIndex = this.interviewQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.interviewQueue[applicationIndex].getStatus();
    }

    applicationIndex = this.finalQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.finalQueue[applicationIndex].getStatus();
    }

    return null;
  }

  getFullVisaApplication(applicationNumber: number): VisaApplication | null {
    let applicationIndex: number;

    applicationIndex = this.initialQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.initialQueue[applicationIndex];
    }

    applicationIndex = this.interviewQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.interviewQueue[applicationIndex];
    }

    applicationIndex = this.finalQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.finalQueue[applicationIndex];
    }

    return null;
  }

  generateStatistics(): {} {
    return {};
  }
}
