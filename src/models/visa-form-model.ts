// Filename: visa-form-model.ts
// functions that interface with the form database tables

import { PrismaClient } from '@prisma/client';

import {
  PersonalSection,
  TravelSection,
  WorkSection,
  SecuritySection,
  BusinessSection,
  TouristSection,
  StudentSection,
} from '@prisma/client';

// import { VisaForm } from './classes/visa-forms/abstract/VisaForm.js';

const prisma = new PrismaClient();

// CREATE FUNCTIONS

export const createVFPersonal = async (values: PersonalSection) => {
  try {
    await prisma.personalSection.create({
      data: { ...values },
    });
  } catch (error) {
    throw error;
  }
};

export const createVFTravel = async (values: TravelSection) => {
  try {
    await prisma.travelSection.create({
      data: { ...values },
    });
  } catch (error) {
    throw error;
  }
};

export const createVFWork = async (values: WorkSection) => {
  try {
    await prisma.workSection.create({
      data: { ...values },
    });
  } catch (error) {
    throw error;
  }
};

export const createVFSecurity = async (values: SecuritySection) => {
  try {
    await prisma.securitySection.create({
      data: { ...values },
    });
  } catch (error) {
    throw error;
  }
};

export const createVFBusiness = async (values: BusinessSection) => {
  try {
    await prisma.businessSection.create({
      data: { ...values },
    });
  } catch (error) {
    throw error;
  }
};

export const createVFTourist = async (values: TouristSection) => {
  try {
    await prisma.touristSection.create({
      data: { ...values },
    });
  } catch (error) {
    throw error;
  }
};

export const createVFStudent = async (values: StudentSection) => {
  try {
    await prisma.studentSection.create({
      data: { ...values },
    });
  } catch (error) {
    throw error;
  }
};
