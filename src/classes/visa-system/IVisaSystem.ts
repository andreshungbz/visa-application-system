// Visa System Interface (Header)

import { VisaApplication } from '../visa-application/VisaApplication';
import { VisaStatus } from '../../enums/visa-status';
import { Employee } from '../employees/abstract/Employee';

export interface IVisaSystem {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // employees: Employee[];
  // initialQueue: VisaApplication[];
  // interviewQueue: VisaApplication[];
  // finalQueue: VisaApplication[];

  // MAIN METHODS

  authenticate(employeeNumber: number, password: string): boolean;
  addVisaApplication(application: VisaApplication): boolean;
  getVisaApplicationStatus(applicationNumber: number): VisaStatus | null;
  getFullVisaApplication(applicationNumber: number): VisaApplication | null;
  getInitialQueue(): VisaApplication[];
  getInterviewQueue(): VisaApplication[];
  getFinalQueue(): VisaApplication[];
  getEmployeeDetails(employeeNumber: number): Employee | null;
}
