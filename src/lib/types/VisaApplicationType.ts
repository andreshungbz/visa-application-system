// Visa Application Type

import { VisaType, VisaStatus } from '@prisma/client';

import { VisaForm } from '../../models/classes/visa-forms/abstract/VisaForm.js';
import { ReviewerNotes } from './ReviwerNotes.js';

export interface VisaApplicationType {
  applicationNumber: number;
  type: VisaType;
  status: VisaStatus;
  form: VisaForm;
  notes: ReviewerNotes;
  createdAt: Date;
  updatedAt: Date;
}
