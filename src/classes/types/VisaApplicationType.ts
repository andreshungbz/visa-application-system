// Visa Application Type

import { VisaStatus } from '../enums/visa-status';
import { VisaType } from '../enums/visa-type';
import { VisaForm } from '../visa-forms/abstract/VisaForm';
import { ReviewerNotes } from './ReviwerNotes';

export interface VisaApplicationType {
  applicationNumber: number;
  type: VisaType;
  status: VisaStatus;
  form: VisaForm;
  notes: ReviewerNotes;
}
