// Visa Application Concrete Class (Implementation)

import { IVisaApplication } from './IVisaApplication.js';

import { VisaType, VisaStatus } from '@prisma/client';

import { VisaForm } from '../visa-forms/abstract/VisaForm.js';
import { ReviewerNotes } from '../../../lib/types/ReviwerNotes.js';
import { VisaApplicationType } from '../../../lib/types/VisaApplicationType.js';

export class VisaApplication implements IVisaApplication {
  // CONSTRUCTOR

  constructor(
    protected applicationNumber: number,
    protected type: VisaType,
    protected status: VisaStatus,
    protected form: VisaForm,
    protected notes: ReviewerNotes = {
      initial: { reviewer: null, notes: null },
      interview: { reviewer: null, notes: null },
      final: { reviewer: null, notes: null },
    },
    protected createdAt: Date = new Date(),
    protected updatedAt: Date = new Date()
  ) {}

  // MAIN METHODS

  getApplication(): VisaApplicationType {
    return {
      applicationNumber: this.getApplicationNumber(),
      type: this.getType(),
      status: this.getStatus(),
      form: this.form,
      notes: this.notes,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
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
  getS1Reviewer(): string | null {
    return this.notes.initial.reviewer;
  }
  getS1Notes(): string | null {
    return this.notes.initial.notes;
  }
  getS2Reviewer(): string | null {
    return this.notes.interview.reviewer;
  }
  getS2Notes(): string | null {
    return this.notes.interview.notes;
  }
  getS3Reviewer(): string | null {
    return this.notes.final.reviewer;
  }
  getS3Notes(): string | null {
    return this.notes.final.notes;
  }
  getCreatedAt(): Date {
    return this.createdAt;
  }
  getUpdatedAt(): Date {
    return this.updatedAt;
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
  setCreatedAt(date: Date): boolean {
    this.createdAt = date;
    return true;
  }
  setUpdatedAt(date: Date): boolean {
    this.updatedAt = date;
    return true;
  }
}
