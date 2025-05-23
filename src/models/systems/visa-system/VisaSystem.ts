// Visa System Concrete Class (Implementation)

import { IVisaSystem } from './IVisaSystem.js';

import { VisaType, VisaStatus } from '@prisma/client';

import { VisaApplication } from '../../classes/visa-application/VisaApplication.js';
import { VisaForm } from '../../classes/visa-forms/abstract/VisaForm.js';

import {
  createVisaApplication,
  readNextApplicationNumber,
  readVisaApplications,
} from '../../visa-application-model.js';

import { B1Form } from '../../classes/visa-forms/B1/B1Form.js';
import { B2Form } from '../../classes/visa-forms/B2/B2Form.js';
import { F1Form } from '../../classes/visa-forms/F1/F1Form.js';
import { VStatistics } from '../../../lib/types/VStatistics.js';

export class VisaSystem implements IVisaSystem {
  // PROPERTIES (DATA MEMBERS)

  nextApplicationNumber: number;
  private initialQueue: VisaApplication[];
  private interviewQueue: VisaApplication[];
  private finalQueue: VisaApplication[];
  private approvedApplications: VisaApplication[];
  private rejectedApplications: VisaApplication[];

  // CONSTRUCTOR

  constructor() {
    this.nextApplicationNumber = 0;
    this.initialQueue = [];
    this.interviewQueue = [];
    this.finalQueue = [];
    this.approvedApplications = [];
    this.rejectedApplications = [];

    this.initialize();
  }

  private async initialize() {
    this.nextApplicationNumber = await readNextApplicationNumber();
    this.initialQueue = await readVisaApplications(VisaStatus.Initial);
    this.interviewQueue = await readVisaApplications(VisaStatus.Interview);
    this.finalQueue = await readVisaApplications(VisaStatus.Final);
    this.approvedApplications = await readVisaApplications(VisaStatus.Approved);
    this.rejectedApplications = await readVisaApplications(VisaStatus.Rejected);
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

  getApproved(): VisaApplication[] {
    return this.approvedApplications;
  }

  getRejected(): VisaApplication[] {
    return this.rejectedApplications;
  }

  async addVisaApplication(form: VisaForm): Promise<number> {
    let type: VisaType;
    if (form instanceof B1Form) {
      type = VisaType.B1;
    } else if (form instanceof B2Form) {
      type = VisaType.B2;
    } else if (form instanceof F1Form) {
      type = VisaType.F1;
    } else {
      throw new Error('Visa Type does not exist.');
    }

    const application = new VisaApplication(
      this.nextApplicationNumber++,
      type,
      VisaStatus.Initial,
      form
    );

    // ADD TO CLASS MEMORY
    this.initialQueue.push(application);

    // WRITE TO DATABASE
    try {
      await createVisaApplication(application);
    } catch (error) {
      console.error(error);
    }

    return application.getApplicationNumber();
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

    applicationIndex = this.approvedApplications.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.approvedApplications[applicationIndex].getStatus();
    }

    applicationIndex = this.rejectedApplications.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.rejectedApplications[applicationIndex].getStatus();
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

    applicationIndex = this.approvedApplications.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.approvedApplications[applicationIndex];
    }

    applicationIndex = this.rejectedApplications.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.rejectedApplications[applicationIndex];
    }

    return null;
  }

  async generateStatistics(): Promise<VStatistics> {
    return {
      totalCount:
        this.initialQueue.length +
        this.interviewQueue.length +
        this.finalQueue.length +
        this.approvedApplications.length +
        this.rejectedApplications.length,
      initialCount: this.initialQueue.length,
      interviewCount: this.interviewQueue.length,
      finalCount: this.finalQueue.length,
      approvedCount: this.approvedApplications.length,
      rejectedCount: this.rejectedApplications.length,
    };
  }
}
