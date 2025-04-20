// Filename: empty.ts
// empty application forms

import {
  BusinessSection,
  PersonalSection,
  SecuritySection,
  StudentSection,
  TouristSection,
  TravelSection,
  VisaStatus,
  VisaType,
  WorkSection,
} from '@prisma/client';
import { VisaApplication } from '../models/classes/visa-application/VisaApplication.js';
import { B1Form } from '../models/classes/visa-forms/B1/B1Form.js';
import { B2Form } from '../models/classes/visa-forms/B2/B2Form.js';
import { F1Form } from '../models/classes/visa-forms/F1/F1Form.js';
import { ReviewerNotes } from '../lib/types/ReviwerNotes.js';

const emptyPersonal: PersonalSection = {
  visaId: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  address: '',
  passportNumber: '',
  country: '',
  dob: new Date(),
  gender: '',
};

const emptyTravel: TravelSection = {
  visaId: 0,
  stayCity: '',
  stayAddress: '',
  intendedArrivalDate: new Date(),
  intendedLengthOfStay: 1,
};

const emptyWork: WorkSection = {
  visaId: 0,
  phone: '',
  city: '',
  address: '',
  occupation: '',
};

const emptySecurity: SecuritySection = {
  visaId: 0,
  communicableDisease: false,
  moneyLaundering: false,
  drugConspiracy: false,
  arrestedConvicted: false,
  mentalPhysicalDisorder: false,
};

const emptyBusiness: BusinessSection = {
  visaId: 0,
  phone: '',
  city: '',
  address: '',
  purpose: '',
};

const emptyTourist: TouristSection = {
  visaId: 0,
  purpose: '',
};

const emptyStudent: StudentSection = {
  visaId: 0,
  enrolledSchool: '',
  schoolAddress: '',
  enrollmentDate: new Date(),
};

const emptyNotes: ReviewerNotes = {
  initial: { reviewer: null, notes: null },
  interview: { reviewer: null, notes: null },
  final: { reviewer: null, notes: null },
};

export const emptyB1Application = new VisaApplication(
  0,
  VisaType.B1,
  VisaStatus.Initial,
  new B1Form(
    emptyPersonal,
    emptyTravel,
    emptyWork,
    emptySecurity,
    emptyBusiness
  ),
  emptyNotes,
  new Date(),
  new Date()
);

export const emptyB2Application = new VisaApplication(
  0,
  VisaType.B2,
  VisaStatus.Initial,
  new B2Form(
    emptyPersonal,
    emptyTravel,
    emptyWork,
    emptySecurity,
    emptyTourist
  ),
  emptyNotes,
  new Date(),
  new Date()
);

export const emptyF1Application = new VisaApplication(
  0,
  VisaType.F1,
  VisaStatus.Initial,
  new F1Form(
    emptyPersonal,
    emptyTravel,
    emptyWork,
    emptySecurity,
    emptyStudent
  ),
  emptyNotes,
  new Date(),
  new Date()
);
