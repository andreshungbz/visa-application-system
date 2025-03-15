// Filename: visa-application-model.ts
// functions that interface with the visa application database table

import { VisaApplication } from '../classes/visa-application/VisaApplication';

// CREATE FUNCTIONS

export const createVA = (application: VisaApplication): boolean => {
  // TODO: write to database
  console.log(application);

  return true;
};

// READ FUNCTIONS

export const readNextApplicationNumber = (): number => {
  return 1;
};

export const readS1VisaApplications = (): VisaApplication[] => {
  return [];
};

export const readS2VisaApplications = (): VisaApplication[] => {
  return [];
};

export const readS3VisaApplications = (): VisaApplication[] => {
  return [];
};

// UPDATE FUNCTIONS

export const updateVA = (application: VisaApplication): boolean => {
  // TODO: update database table
  console.log(application);

  return true;
};
