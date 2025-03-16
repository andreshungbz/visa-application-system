// Visa Application Interface (Header)

import { VisaType } from '../../enums/visa-type.js';
import { VisaStatus } from '../../enums/visa-status.js';
import { VisaForm } from '../visa-forms/abstract/VisaForm.js';
import { VisaApplicationType } from '../../types/VisaApplicationType.js';

export interface IVisaApplication {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // applicationNumber: number;
  // type: VisaType;
  // status: VisaStatus;
  // form: VisaForm;
  // notes: ReviewerNotes;
  // createdAt: Date;
  // updatedAt: Date;

  // MAIN METHODS

  getApplication(): VisaApplicationType;

  // GETTERS/SETTERS

  getApplicationNumber(): number;
  getType(): VisaType;
  getStatus(): VisaStatus;
  getForm(): VisaForm;
  getS1Reviewer(): string;
  getS1Notes(): string;
  getS2Reviewer(): string;
  getS2Notes(): string;
  getS3Reviewer(): string;
  getS3Notes(): string;
  getCreatedAt(): Date;
  getUpdatedAt(): Date;

  setApplicationNumber(applicationNumber: number): boolean;
  setType(type: VisaType): boolean;
  setStatus(status: VisaStatus): boolean;
  setForm(form: VisaForm): boolean;
  setS1Reviewer(s1Reviewer: string): boolean;
  setS1Notes(s1Notes: string): boolean;
  setS2Reviewer(s2Reviewer: string): boolean;
  setS2Notes(s2Notes: string): boolean;
  setS3Reviewer(s3Reviewer: string): boolean;
  setS3Notes(s3Notes: string): boolean;
}
