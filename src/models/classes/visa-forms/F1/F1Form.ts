// F1 Student Visa Form Concrete Class (Implementation)

import { VisaForm } from '../abstract/VisaForm.js';
import { IF1Form } from './IF1Form.js';

import {
  PersonalSection,
  TravelSection,
  WorkSection,
  SecuritySection,
  StudentSection,
} from '@prisma/client';

import { VisaFormSections } from '../../../../lib/types/VisaFormSections.js';
import { createVFStudent } from '../../../../models/visa-form-model.js';

export class F1Form extends VisaForm implements IF1Form {
  // CONSTRUCTOR

  constructor(
    protected personal: PersonalSection,
    protected travel: TravelSection,
    protected work: WorkSection,
    protected security: SecuritySection,
    protected student: StudentSection
  ) {
    super(personal, travel, work, security);
  }

  // MAIN METHODS (OVERRIDE)

  getSections(): VisaFormSections {
    return {
      personal: this.personal,
      travel: this.travel,
      work: this.work,
      security: this.security,
      student: this.student,
    };
  }

  async syncVFRecord(): Promise<void> {
    try {
      await super.syncVFRecord();
      await createVFStudent(this.student);
    } catch (error) {
      console.error(error);
    }
  }

  // GETTERS/SETTERS

  // student section

  f1_getEnrolledSchool(): string {
    return this.student.enrolledSchool;
  }
  f1_getSchoolAddress(): string {
    return this.student.schoolAddress;
  }
  f1_getEnrollmentDate(): Date {
    return this.student.enrollmentDate;
  }

  f1_setEnrolledSchool(enrolledSchool: string): boolean {
    this.student.enrolledSchool = enrolledSchool;
    return true;
  }
  f1_setSchoolAddress(schoolAddress: string): boolean {
    this.student.schoolAddress = schoolAddress;
    return true;
  }
  f1_setEnrollmentDate(enrollmentDate: Date): boolean {
    this.student.enrollmentDate = enrollmentDate;
    return true;
  }
}
