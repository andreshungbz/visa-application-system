// validate.ts
// functions that examine request form data and returns appropriate object

import {
  BusinessSection,
  PersonalSection,
  SecuritySection,
  StudentSection,
  TouristSection,
  TravelSection,
  VisaType,
  WorkSection,
} from '@prisma/client';
import { Request } from 'express';
import { B1Form } from '../models/classes/visa-forms/B1/B1Form.js';

import { B2Form } from '../models/classes/visa-forms/B2/B2Form.js';
import { F1Form } from '../models/classes/visa-forms/F1/F1Form.js';
import { VisaForm } from '../models/classes/visa-forms/abstract/VisaForm.js';

const validatePersonal = (req: Request, id: number): PersonalSection | null => {
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.phone,
    req.body.address,
    req.body.city,
    req.body.country,
    req.body.passportNumber,
    req.body.dob,
    req.body.gender,
  ];

  for (const v of values) {
    if (!v) return null;
  }

  return {
    visaId: id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    passportNumber: req.body.passportNumber,
    dob: new Date(req.body.dob),
    gender: req.body.gender,
  };
};

const validateTravel = (req: Request, id: number): TravelSection | null => {
  const values = [
    req.body.stayCity,
    req.body.stayAddress,
    req.body.intendedArrivalDate,
    Number(req.body.intendedLengthOfStay),
  ];

  for (const v of values) {
    if (!v) return null;
  }

  return {
    visaId: id,
    stayCity: req.body.stayCity,
    stayAddress: req.body.stayAddress,
    intendedArrivalDate: new Date(req.body.intendedArrivalDate),
    intendedLengthOfStay: Number(req.body.intendedLengthOfStay),
  };
};

const validateWork = (req: Request, id: number): WorkSection | null => {
  const values = [
    req.body.occupation,
    req.body.workPhone,
    req.body.workAddress,
    req.body.workCity,
  ];

  for (const v of values) {
    if (!v) return null;
  }

  return {
    visaId: id,
    occupation: req.body.occupation,
    phone: req.body.workPhone,
    address: req.body.workAddress,
    city: req.body.workCity,
  };
};

const validateSecurity = (req: Request, id: number): SecuritySection => {
  return {
    visaId: id,
    communicableDisease: Boolean(req.body.communicableDisease),
    moneyLaundering: Boolean(req.body.moneyLaundering),
    drugConspiracy: Boolean(req.body.drugConspiracy),
    arrestedConvicted: Boolean(req.body.arrestedConvicted),
    mentalPhysicalDisorder: Boolean(req.body.mentalPhysicalDisorder),
  };
};

const validateBusiness = (req: Request, id: number): BusinessSection | null => {
  const values = [
    req.body.businessPhone,
    req.body.businessCity,
    req.body.businessAddress,
    req.body.businessPurpose,
  ];

  for (const v of values) {
    if (!v) return null;
  }

  return {
    visaId: id,
    phone: req.body.businessPhone,
    city: req.body.businessCity,
    address: req.body.businessAddress,
    purpose: req.body.businessPurpose,
  };
};

const validateTourist = (req: Request, id: number): TouristSection | null => {
  const values = [req.body.purpose];

  for (const v of values) {
    if (!v) return null;
  }

  return {
    visaId: id,
    purpose: req.body.purpose,
  };
};

const validateStudent = (req: Request, id: number): StudentSection | null => {
  const values = [
    req.body.enrolledSchool,
    req.body.schoolAddress,
    req.body.enrollmentDate,
  ];

  for (const v of values) {
    if (!v) return null;
  }

  return {
    visaId: id,
    enrolledSchool: req.body.enrolledSchool,
    schoolAddress: req.body.schoolAddress,
    enrollmentDate: new Date(req.body.enrollmentDate),
  };
};

export const validateForm = (
  req: Request,
  id: number,
  type: VisaType
): VisaForm | null => {
  interface Form {
    personal: ReturnType<typeof validatePersonal>;
    travel: ReturnType<typeof validateTravel>;
    work: ReturnType<typeof validateWork>;
    security: ReturnType<typeof validateSecurity>;
    business?: ReturnType<typeof validateBusiness>;
    tourist?: ReturnType<typeof validateTourist>;
    student?: ReturnType<typeof validateStudent>;
  }

  const form: Form = {
    personal: validatePersonal(req, id),
    travel: validateTravel(req, id),
    work: validateWork(req, id),
    security: validateSecurity(req, id),
  };

  switch (type) {
    case VisaType.B1:
      form.business = validateBusiness(req, id);
      return new B1Form(
        form.personal!,
        form.travel!,
        form.work!,
        form.security,
        form.business!
      );
    case VisaType.B2:
      form.tourist = validateTourist(req, id);
      new B2Form(
        form.personal!,
        form.travel!,
        form.work!,
        form.security,
        form.tourist!
      );
    case VisaType.F1:
      form.student = validateStudent(req, id);
      new F1Form(
        form.personal!,
        form.travel!,
        form.work!,
        form.security,
        form.student!
      );
    default:
      return null;
  }
};
