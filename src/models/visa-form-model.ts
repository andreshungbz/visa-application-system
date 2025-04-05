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

// READ FUNCTIONS

// export const readVFPersonal = async (
//   applicationNumber: number
// ): Promise<PersonalSection> => {
//   // TODO: read from database
//   console.log(applicationNumber);

//   return {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     city: '',
//     address: '',
//     passportNumber: '',
//     country: '',
//     dob: new Date(),
//     gender: '',
//   };
// };

// export const readVFTravel = async (
//   applicationNumber: number
// ): Promise<TravelSection> => {
//   // TODO: read from database
//   console.log(applicationNumber);

//   return {
//     stayCity: '',
//     stayAddress: '',
//     intendedArrivalDate: new Date(),
//     intendedLengthOfStay: 0,
//   };
// };

// export const readVFWork = async (
//   applicationNumber: number
// ): Promise<WorkSection> => {
//   // TODO: read from database
//   console.log(applicationNumber);

//   return {
//     occupation: '',
//     phone: '',
//     city: '',
//     address: '',
//   };
// };

// export const readVFSecurity = async (
//   applicationNumber: number
// ): Promise<SecuritySection> => {
//   // TODO: read from database
//   console.log(applicationNumber);

//   return {
//     communicableDisease: false,
//     moneyLaundering: false,
//     drugConspiracy: false,
//     arrestedConvicted: false,
//     mentalPhysicalDisorder: false,
//   };
// };

// export const readVFBusiness = async (
//   applicationNumber: number
// ): Promise<BusinessSection> => {
//   // TODO: read from database
//   console.log(applicationNumber);

//   return {
//     phone: '',
//     city: '',
//     address: '',
//     purpose: '',
//   };
// };

// export const readVFTourist = async (
//   applicationNumber: number
// ): Promise<TouristSection> => {
//   // TODO: read from database
//   console.log(applicationNumber);

//   return {
//     purpose: '',
//   };
// };

// export const readVFStudent = async (
//   applicationNumber: number
// ): Promise<StudentSection> => {
//   // TODO: read from database
//   console.log(applicationNumber);

//   return {
//     enrolledSchool: '',
//     schoolAddress: '',
//     enrollmentDate: new Date(),
//   };
// };
