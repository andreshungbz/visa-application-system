// Filename: data.ts
// inserts example data to work with

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // insert roles
  await prisma.employeeRole.createMany({
    data: [{ role: 'VisaReviewer' }, { role: 'SystemSupervisor' }],
  });

  // insert visa reviewer
  const reviewer = await prisma.employee.create({
    data: {
      role: 'VisaReviewer',
      firstName: 'Andres',
      lastName: 'Hung',
      ssn: '123-45-6789',
      password: 'password',
      salary: 50000,
      employed: true,
    },
  });

  // insert system supervisor
  await prisma.employee.create({
    data: {
      role: 'SystemSupervisor',
      firstName: 'Darwin',
      lastName: 'Ramos',
      ssn: '987-65-4321',
      password: 'password',
      salary: 70000,
      employed: true,
    },
  });

  // insert visa application

  const visaApplication = await prisma.visaApplication.create({
    data: {
      type: 'B1',
      status: 'Interview',
      s1Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s1Notes: 'Initial review pending.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // personal section
  await prisma.personalSection.create({
    data: {
      visaId: visaApplication.applicationNumber,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-1234',
      city: 'New York',
      address: '123 Main St',
      passportNumber: 'A12345678',
      country: 'USA',
      dob: new Date('1990-01-01'),
      gender: 'Female',
    },
  });

  // travel section
  await prisma.travelSection.create({
    data: {
      visaId: visaApplication.applicationNumber,
      stayCity: 'Los Angeles',
      stayAddress: '456 Elm St',
      intendedArrivalDate: new Date('2025-06-01'),
      intendedLengthOfStay: 14,
    },
  });

  // work section
  await prisma.workSection.create({
    data: {
      visaId: visaApplication.applicationNumber,
      occupation: 'Software Engineer',
      phone: '555-5678',
      city: 'San Francisco',
      address: '789 Pine St',
    },
  });

  // security section
  await prisma.securitySection.create({
    data: {
      visaId: visaApplication.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: false,
      mentalPhysicalDisorder: false,
    },
  });

  // B1 business section
  await prisma.businessSection.create({
    data: {
      visaId: visaApplication.applicationNumber,
      phone: '555-9876',
      city: 'Chicago',
      address: '101 Maple St',
      purpose: 'Business Meeting',
    },
  });
};

(async () => {
  try {
    await main();
    console.log(`[INIT] Example data inserted`);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
})();
