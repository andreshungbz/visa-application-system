// Visa System Interface (Header)

import { VisaStatus } from '@prisma/client';

import { VisaApplication } from '../../classes/visa-application/VisaApplication.js';
import { VisaForm } from '../../classes/visa-forms/abstract/VisaForm.js';

export interface IVisaSystem {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // nextApplicationNumber: number;
  // initialQueue: VisaApplication[];
  // interviewQueue: VisaApplication[];
  // finalQueue: VisaApplication[];

  // MAIN METHODS

  getInitialQueue(): VisaApplication[];
  getInterviewQueue(): VisaApplication[];
  getFinalQueue(): VisaApplication[];
  getApproved(): VisaApplication[];
  getRejected(): VisaApplication[];
  addVisaApplication(form: VisaForm): Promise<number>;
  getVisaApplicationStatus(applicationNumber: number): VisaStatus | null;
  getFullVisaApplication(applicationNumber: number): VisaApplication | null;
}
