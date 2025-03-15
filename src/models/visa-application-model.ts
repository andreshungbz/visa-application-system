// Filename: visa-application-model.ts
// functions that interface with the visa application database table

import { VisaApplication } from '../classes/visa-application/VisaApplication';

// CREATE FUNCTIONS

export const createVA = async (
  application: VisaApplication
): Promise<boolean> => {
  // TODO: write to database
  console.log(application);

  return true;
};

// READ FUNCTIONS

export const readNextApplicationNumber = async (): Promise<number> => {
  return 1;
};

export const readS1VisaApplications = async (): Promise<VisaApplication[]> => {
  return [];
};

export const readS2VisaApplications = async (): Promise<VisaApplication[]> => {
  return [];
};

export const readS3VisaApplications = async (): Promise<VisaApplication[]> => {
  return [];
};

// UPDATE FUNCTIONS

export const updateVA = async (
  application: VisaApplication
): Promise<boolean> => {
  // TODO: update database table
  console.log(application);

  return true;
};
