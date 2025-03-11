// Visa Application Concrete Class (Implementation)

import { IVisaApplication } from './IVisaApplication';

import { VisaType } from '../../enums/visa-type';
import { VisaStatus } from '../../enums/visa-status';
import { VisaForm } from '../visa-forms/abstract/VisaForm';
import { ReviewerNotes } from '../../types/ReviwerNotes';
import { VisaApplicationType } from '../../types/VisaApplicationType';

export class VisaApplication implements IVisaApplication {
  // CONSTRUCTOR

  constructor(
    protected applicationNumber: number,
    protected type: VisaType,
    protected status: VisaStatus,
    protected form: VisaForm,
    protected notes: ReviewerNotes
  ) {}

  // MAIN METHODS

  getApplication(): VisaApplicationType {
    return {
      applicationNumber: this.applicationNumber,
      type: this.type,
      status: this.status,
      form: this.form,
      notes: this.notes,
    };
  }

  insertRecord(): boolean {
    return true;
  }

  // GETTERS/SETTERS

  getApplicationNumber(): number {
    return this.applicationNumber;
  }
  getType(): VisaType {
    return this.type;
  }
  getStatus(): VisaStatus {
    return this.status;
  }
  getForm(): VisaForm {
    return this.form;
  }
  getS1Reviewer(): string {
    return this.notes.initial.reviewer;
  }
  getS1Notes(): string {
    return this.notes.initial.notes;
  }
  getS2Reviewer(): string {
    return this.notes.interview.reviewer;
  }
  getS2Notes(): string {
    return this.notes.interview.notes;
  }
  getS3Reviewer(): string {
    return this.notes.final.reviewer;
  }
  getS3Notes(): string {
    return this.notes.final.notes;
  }

  setApplicationNumber(applicationNumber: number): boolean {
    this.applicationNumber = applicationNumber;
    return true;
  }
  setType(type: VisaType): boolean {
    this.type = type;
    return true;
  }
  setStatus(status: VisaStatus): boolean {
    this.status = status;
    return true;
  }
  setForm(form: VisaForm): boolean {
    this.form = form;
    return true;
  }
  setS1Reviewer(s1Reviewer: string): boolean {
    this.notes.initial.reviewer = s1Reviewer;
    return true;
  }
  setS1Notes(s1Notes: string): boolean {
    this.notes.initial.notes = s1Notes;
    return true;
  }
  setS2Reviewer(s2Reviewer: string): boolean {
    this.notes.interview.reviewer = s2Reviewer;
    return true;
  }
  setS2Notes(s2Notes: string): boolean {
    this.notes.interview.notes = s2Notes;
    return true;
  }
  setS3Reviewer(s3Reviewer: string): boolean {
    this.notes.final.reviewer = s3Reviewer;
    return true;
  }
  setS3Notes(s3Notes: string): boolean {
    this.notes.final.notes = s3Notes;
    return true;
  }
}
