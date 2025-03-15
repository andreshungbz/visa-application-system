// Filename: visa-application-model.ts
// functions that interface with the database

import { VisaForm } from '../classes/visa-forms/abstract/VisaForm';
import { B1Form } from '../classes/visa-forms/B1/B1Form';
import { B2Form } from '../classes/visa-forms/B2/B2Form';
import { F1Form } from '../classes/visa-forms/F1/F1Form';

import { VisaApplication } from '../classes/visa-application/VisaApplication';
import { Employee } from '../classes/employees/abstract/Employee';

export const getS1VisaApplications = (): VisaApplication[] => {
  return [];
};

export const getS2VisaApplications = (): VisaApplication[] => {
  return [];
};

export const getS3VisaApplications = (): VisaApplication[] => {
  return [];
};

export const getEmployees = (): Employee[] => {
  return [];
};
