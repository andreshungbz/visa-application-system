// B1 Business Visa Form Interface (Header)

import { IVisaForm } from '../abstract/IVisaForm';

export interface IB1Form extends IVisaForm {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // business: BusinessSection

  // GETTERS/SETTERS

  // business section

  b1_getPhone(): string;
  b1_getCity(): string;
  b1_getAddress(): string;
  b1_getPurpose(): string;

  b1_setPhone(phone: string): boolean;
  b1_setCity(city: string): boolean;
  b1_setAddress(address: string): boolean;
  b1_setPurpose(purpose: string): boolean;
}
