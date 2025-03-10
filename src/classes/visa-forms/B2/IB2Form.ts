// B2 Tourist/Medical Visa Form Interface (Header)

import { IVisaForm } from '../abstract/IVisaForm';

export interface IB2Form extends IVisaForm {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // tourist: TouristSection

  // GETTERS/SETTERS

  // tourist section

  b2_getPurpose(): string;

  b2_setPurpose(purpose: string): boolean;
}
