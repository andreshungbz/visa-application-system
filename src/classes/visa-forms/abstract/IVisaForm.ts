// Visa Form Interface (Header)

import { VisaFormSections } from '../../../types/VisaFormSections.js';

export interface IVisaForm {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // personal: PersonalSection;
  // travel: TravelSection;
  // work: WorkSection;
  // security: SecuritySection;

  // MAIN METHODS

  getSections(): VisaFormSections;
  syncVFRecord(applicationNumber: number): Promise<boolean>;

  // GETTERS/SETTERS

  // personal section

  p_getFirstName(): string;
  p_getLastName(): string;
  p_getEmail(): string;
  p_getPhone(): string;
  p_getCity(): string;
  p_getAddress(): string;
  p_getPassportNumber(): string;
  p_getCountry(): string;
  p_getDOB(): Date;
  p_getGender(): string;

  p_setFirstName(firstName: string): boolean;
  p_setLastName(lastName: string): boolean;
  p_setEmail(email: string): boolean;
  p_setPhone(phone: string): boolean;
  p_setCity(city: string): boolean;
  p_setAddress(address: string): boolean;
  p_setPassportNumber(passportNumber: string): boolean;
  p_setCountry(country: string): boolean;
  p_setDOB(date: Date): boolean;
  p_setGender(gender: string): boolean;

  // travel section

  t_getStayCity(): string;
  t_getStayAddress(): string;
  t_getIntendedArrivalDate(): Date;
  t_getIntendedLengthOfStay(): number;

  t_setStayCity(stayCity: string): boolean;
  t_setStayAddress(stayAddress: string): boolean;
  t_setIntendedArrivalDate(intendedIrrivalDate: Date): boolean;
  t_setIntendedLengthOfStay(intendedLengthOfStay: number): boolean;

  // work section

  w_getOccupation(): string;
  w_getPhone(): string;
  w_getCity(): string;
  w_getAddress(): string;

  w_setOccupation(occupation: string): boolean;
  w_setPhone(phone: string): boolean;
  w_setCity(city: string): boolean;
  w_setAddress(address: string): boolean;

  // security section

  s_getCommunicableDisease(): boolean;
  s_getMoneyLaundering(): boolean;
  s_getDrugConspiracy(): boolean;
  s_getArrestedConvicted(): boolean;
  s_getMentalPhysicalDisorder(): boolean;

  s_setCommunicableDisease(checked: boolean): boolean;
  s_setMoneyLaundering(checked: boolean): boolean;
  s_setDrugConspiracy(checked: boolean): boolean;
  s_setArrestedConvicted(checked: boolean): boolean;
  s_setMentalPhysicalDisorder(checked: boolean): boolean;
}
