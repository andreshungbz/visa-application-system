// F1 Student Visa Form Concrete Class (Implementation)

import { VisaForm } from '../abstract/VisaForm';
import { IF1Form } from './IF1Form';

import { PersonalSection } from '../../../types/sections/PersonalSection';
import { TravelSection } from '../../../types/sections/TravelSection';
import { WorkSection } from '../../../types/sections/WorkSection';
import { SecuritySection } from '../../../types/sections/SecuritySection';
import { StudentSection } from '../../../types/sections/StudentSection';
import { VisaFormSections } from '../../../types/VisaFormSections';
import { createVFStudent } from '../../../models/visa-form-model';

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

  syncVFRecord(applicationNumber: number): boolean {
    super.syncVFRecord(applicationNumber);
    createVFStudent(applicationNumber, this.student);

    return true;
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
