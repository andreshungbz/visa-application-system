// Visa System Interface (Header)

import { VisaApplication } from '../visa-application/VisaApplication';
import { VisaStatus } from '../../enums/visa-status';

export interface IVisaSystem {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // employees: Employee[];
  // initialQueue: VisaApplication[];
  // interviewQueue: VisaApplication[];
  // finalQueue: VisaApplication[];

  // MAIN METHODS

  getInitialQueue(): VisaApplication[];
  getInterviewQueue(): VisaApplication[];
  getFinalQueue(): VisaApplication[];
  addVisaApplication(application: VisaApplication): boolean;
  getVisaApplicationStatus(applicationNumber: number): VisaStatus | null;
  getFullVisaApplication(applicationNumber: number): VisaApplication | null;

  generateStatistics(): {};
}
