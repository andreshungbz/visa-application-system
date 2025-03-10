// F1 Student Visa Form Interface (Header)

import { IVisaForm } from '../abstract/IVisaForm';

export interface IF1Form extends IVisaForm {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // student: StudentSection

  // GETTERS/SETTERS

  // student section

  f1_getEnrolledSchool(): string;
  f1_getSchoolAddress(): string;
  f1_getEnrollmentDate(): Date;

  f1_setEnrolledSchool(enrolledSchool: string): boolean;
  f1_setSchoolAddress(schoolAddress: string): boolean;
  f1_setEnrollmentDate(enrollmentDate: Date): boolean;
}
