// Visa Reviewer Interface (Header)

import { IEmployee } from '../abstract/IEmployee';

import { VisaApplication } from '../../visa-application/VisaApplication';

export interface IVisaReviewer extends IEmployee {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // no additional properties

  // MAIN METHODS

  approveApplicationStage(application: VisaApplication, notes: string): boolean;
  rejectApplication(application: VisaApplication, notes: string): boolean;
}
