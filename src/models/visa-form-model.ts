// Filename: visa-form-model.ts
// functions that interface with the form database tables

import { PersonalSection } from '../types/sections/PersonalSection.js';
import { TravelSection } from '../types/sections/TravelSection.js';
import { WorkSection } from '../types/sections/WorkSection.js';
import { SecuritySection } from '../types/sections/SecuritySection.js';
import { BusinessSection } from '../types/sections/BusinessSection.js';
import { TouristSection } from '../types/sections/TouristSection.js';
import { StudentSection } from '../types/sections/StudentSection.js';

// CREATE FUNCTIONS

export const createVFPersonal = async (
  applicationNumber: number,
  values: PersonalSection
): Promise<boolean> => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFTravel = async (
  applicationNumber: number,
  values: TravelSection
): Promise<boolean> => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFWork = async (
  applicationNumber: number,
  values: WorkSection
): Promise<boolean> => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFSecurity = async (
  applicationNumber: number,
  values: SecuritySection
): Promise<boolean> => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFBusiness = async (
  applicationNumber: number,
  values: BusinessSection
): Promise<boolean> => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFTourist = async (
  applicationNumber: number,
  values: TouristSection
): Promise<boolean> => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFStudent = async (
  applicationNumber: number,
  values: StudentSection
): Promise<boolean> => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

// READ FUNCTIONS

export const readVFPersonal = async (
  applicationNumber: number
): Promise<PersonalSection> => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    passportNumber: '',
    country: '',
    dob: new Date(),
    gender: '',
  };
};

export const readVFTravel = async (
  applicationNumber: number
): Promise<TravelSection> => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    stayCity: '',
    stayAddress: '',
    intendedArrivalDate: new Date(),
    intendedLengthOfStay: 0,
  };
};

export const readVFWork = async (
  applicationNumber: number
): Promise<WorkSection> => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    occupation: '',
    phone: '',
    city: '',
    address: '',
  };
};

export const readVFSecurity = async (
  applicationNumber: number
): Promise<SecuritySection> => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    communicableDisease: false,
    moneyLaundering: false,
    drugConspiracy: false,
    arrestedConvicted: false,
    mentalPhysicalDisorder: false,
  };
};

export const readVFBusiness = async (
  applicationNumber: number
): Promise<BusinessSection> => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    phone: '',
    city: '',
    address: '',
    purpose: '',
  };
};

export const readVFTourist = async (
  applicationNumber: number
): Promise<TouristSection> => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    purpose: '',
  };
};

export const readVFStudent = async (
  applicationNumber: number
): Promise<StudentSection> => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    enrolledSchool: '',
    schoolAddress: '',
    enrollmentDate: new Date(),
  };
};
