// Visa Reviewer Interface (Header)

import { IEmployee } from '../abstract/IEmployee.js';

export interface IVisaReviewer extends IEmployee {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // no additional properties

  // MAIN METHODS

  approveApplicationStage(
    applicationNumber: number,
    notes: string
  ): Promise<void>;

  rejectApplication(applicationNumber: number, notes: string): Promise<void>;
}
