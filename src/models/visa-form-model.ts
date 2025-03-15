// Filename: visa-form-model.ts
// functions that interface with the form database tables

import { PersonalSection } from '../types/sections/PersonalSection';
import { TravelSection } from '../types/sections/TravelSection';
import { WorkSection } from '../types/sections/WorkSection';
import { SecuritySection } from '../types/sections/SecuritySection';
import { BusinessSection } from '../types/sections/BusinessSection';
import { TouristSection } from '../types/sections/TouristSection';
import { StudentSection } from '../types/sections/StudentSection';

// CREATE FUNCTIONS

export const createVFPersonal = (
  applicationNumber: number,
  values: PersonalSection
): boolean => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFTravel = (
  applicationNumber: number,
  values: TravelSection
): boolean => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFWork = (
  applicationNumber: number,
  values: WorkSection
): boolean => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFSecurity = (
  applicationNumber: number,
  values: SecuritySection
): boolean => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFBusiness = (
  applicationNumber: number,
  values: BusinessSection
): boolean => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFTourist = (
  applicationNumber: number,
  values: TouristSection
): boolean => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

export const createVFStudent = (
  applicationNumber: number,
  values: StudentSection
): boolean => {
  // TODO: write to database
  console.log(applicationNumber, values);

  return true;
};

// READ FUNCTIONS

export const readVFPersonal = (applicationNumber: number): PersonalSection => {
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

export const readVFTravel = (applicationNumber: number): TravelSection => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    stayCity: '',
    stayAddress: '',
    intendedArrivalDate: new Date(),
    intendedLengthOfStay: 0,
  };
};

export const readVFWork = (applicationNumber: number): WorkSection => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    occupation: '',
    phone: '',
    city: '',
    address: '',
  };
};

export const readVFSecurity = (applicationNumber: number): SecuritySection => {
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

export const readVFBusiness = (applicationNumber: number): BusinessSection => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    phone: '',
    city: '',
    address: '',
    purpose: '',
  };
};

export const readVFTourist = (applicationNumber: number): TouristSection => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    purpose: '',
  };
};

export const readVFStudent = (applicationNumber: number): StudentSection => {
  // TODO: read from database
  console.log(applicationNumber);

  return {
    enrolledSchool: '',
    schoolAddress: '',
    enrollmentDate: new Date(),
  };
};
