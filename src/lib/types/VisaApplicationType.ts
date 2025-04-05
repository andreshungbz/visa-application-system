// Visa Application Type

import { VisaStatus } from '../enums/visa-status.js';
import { VisaType } from '../enums/visa-type.js';
import { VisaForm } from '../../models/classes/visa-forms/abstract/VisaForm.js';
import { ReviewerNotes } from './ReviwerNotes.js';

export interface VisaApplicationType {
  applicationNumber: number;
  type: VisaType;
  status: VisaStatus;
  form: VisaForm;
  notes: ReviewerNotes;
}
