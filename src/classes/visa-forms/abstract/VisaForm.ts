// Visa Form Abstract Class (Implementation)

import { IVisaForm } from './IVisaForm.js';

import { PersonalSection } from '../../../types/sections/PersonalSection.js';
import { TravelSection } from '../../../types/sections/TravelSection.js';
import { WorkSection } from '../../../types/sections/WorkSection.js';
import { SecuritySection } from '../../../types/sections/SecuritySection.js';
import { VisaFormSections } from '../../../types/VisaFormSections.js';

import {
  createVFPersonal,
  createVFSecurity,
  createVFTravel,
  createVFWork,
} from '../../../models/visa-form-model.js';

export abstract class VisaForm implements IVisaForm {
  // CONSTRUCTOR

  constructor(
    protected personal: PersonalSection,
    protected travel: TravelSection,
    protected work: WorkSection,
    protected security: SecuritySection
  ) {}

  // MAIN METHODS

  getSections(): VisaFormSections {
    return {
      personal: this.personal,
      travel: this.travel,
      work: this.work,
      security: this.security,
    };
  }

  async syncVFRecord(applicationNumber: number): Promise<boolean> {
    await createVFPersonal(applicationNumber, this.personal);
    await createVFTravel(applicationNumber, this.travel);
    await createVFWork(applicationNumber, this.work);
    await createVFSecurity(applicationNumber, this.security);

    return true;
  }

  // GETTERS/SETTERS

  // personal section

  p_getFirstName(): string {
    return this.personal.firstName;
  }
  p_getLastName(): string {
    return this.personal.lastName;
  }
  p_getEmail(): string {
    return this.personal.email;
  }
  p_getPhone(): string {
    return this.personal.phone;
  }
  p_getCity(): string {
    return this.personal.city;
  }
  p_getAddress(): string {
    return this.personal.address;
  }
  p_getPassportNumber(): string {
    return this.personal.passportNumber;
  }
  p_getCountry(): string {
    return this.personal.country;
  }
  p_getDOB(): Date {
    return this.personal.dob;
  }
  p_getGender(): string {
    return this.personal.gender;
  }

  p_setFirstName(firstName: string): boolean {
    this.personal.firstName = firstName;
    return true;
  }
  p_setLastName(lastName: string): boolean {
    this.personal.lastName = lastName;
    return true;
  }
  p_setEmail(email: string): boolean {
    this.personal.email = email;
    return true;
  }
  p_setPhone(phone: string): boolean {
    this.personal.phone = phone;
    return true;
  }
  p_setCity(city: string): boolean {
    this.personal.city = city;
    return true;
  }
  p_setAddress(address: string): boolean {
    this.personal.address = address;
    return true;
  }
  p_setPassportNumber(passportNumber: string): boolean {
    this.personal.passportNumber = passportNumber;
    return true;
  }
  p_setCountry(country: string): boolean {
    this.personal.country = country;
    return true;
  }
  p_setDOB(date: Date): boolean {
    this.personal.dob = date;
    return true;
  }
  p_setGender(gender: string): boolean {
    this.personal.gender = gender;
    return true;
  }

  // travel section

  t_getStayCity(): string {
    return this.travel.stayCity;
  }
  t_getStayAddress(): string {
    return this.travel.stayAddress;
  }
  t_getIntendedArrivalDate(): Date {
    return this.travel.intendedArrivalDate;
  }
  t_getIntendedLengthOfStay(): number {
    return this.travel.intendedLengthOfStay;
  }

  t_setStayCity(stayCity: string): boolean {
    this.travel.stayCity = stayCity;
    return true;
  }
  t_setStayAddress(stayAddress: string): boolean {
    this.travel.stayAddress = stayAddress;
    return true;
  }
  t_setIntendedArrivalDate(intendedArrivalDate: Date): boolean {
    this.travel.intendedArrivalDate = intendedArrivalDate;
    return true;
  }
  t_setIntendedLengthOfStay(intendedLengthOfStay: number): boolean {
    this.travel.intendedLengthOfStay = intendedLengthOfStay;
    return true;
  }

  // work section

  w_getOccupation(): string {
    return this.work.occupation;
  }
  w_getPhone(): string {
    return this.work.phone;
  }
  w_getCity(): string {
    return this.work.city;
  }
  w_getAddress(): string {
    return this.work.address;
  }

  w_setOccupation(occupation: string): boolean {
    this.work.occupation = occupation;
    return true;
  }
  w_setPhone(phone: string): boolean {
    this.work.phone = phone;
    return true;
  }
  w_setCity(city: string): boolean {
    this.work.city = city;
    return true;
  }
  w_setAddress(address: string): boolean {
    this.work.address = address;
    return true;
  }

  // security section

  s_getCommunicableDisease(): boolean {
    return this.security.communicableDisease;
  }
  s_getMoneyLaundering(): boolean {
    return this.security.moneyLaundering;
  }
  s_getDrugConspiracy(): boolean {
    return this.security.drugConspiracy;
  }
  s_getArrestedConvicted(): boolean {
    return this.security.arrestedConvicted;
  }
  s_getMentalPhysicalDisorder(): boolean {
    return this.security.mentalPhysicalDisorder;
  }

  s_setCommunicableDisease(checked: boolean): boolean {
    this.security.communicableDisease = checked;
    return true;
  }
  s_setMoneyLaundering(checked: boolean): boolean {
    this.security.moneyLaundering = checked;
    return true;
  }
  s_setDrugConspiracy(checked: boolean): boolean {
    this.security.drugConspiracy = checked;
    return true;
  }
  s_setArrestedConvicted(checked: boolean): boolean {
    this.security.arrestedConvicted = checked;
    return true;
  }
  s_setMentalPhysicalDisorder(checked: boolean): boolean {
    this.security.mentalPhysicalDisorder = checked;
    return true;
  }
}
