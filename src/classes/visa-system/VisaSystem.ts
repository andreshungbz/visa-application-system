// Visa System Concrete Class (Implementation)

import { IVisaSystem } from './IVisaSystem';

import { VisaApplication } from '../visa-application/VisaApplication';
import { VisaStatus } from '../../enums/visa-status';

import {
  readS1VisaApplications,
  readS2VisaApplications,
  readS3VisaApplications,
} from '../../models/visa-application-model';

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

  addVisaApplication(application: VisaApplication): boolean {
    // ADD TO CLASS MEMORY
    this.initialQueue.push(application);
    // WRITE TO DATABASE
    application.syncVARecord();

    return true;
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
