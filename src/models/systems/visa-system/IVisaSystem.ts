// Visa System Interface (Header)

import { VisaApplication } from '../../classes/visa-application/VisaApplication.js';
import { VisaForm } from '../../classes/visa-forms/abstract/VisaForm.js';
import { VisaStatus } from '../../../lib/enums/visa-status.js';

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
  addVisaApplication(form: VisaForm): Promise<number>;
  getVisaApplicationStatus(applicationNumber: number): VisaStatus | null;
  getFullVisaApplication(applicationNumber: number): VisaApplication | null;
  updateVisaApplication(application: VisaApplication): Promise<boolean>;

  generateStatistics(): Promise<{}>;
}
