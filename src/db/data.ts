// Filename: data.ts
// inserts example data to work with

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

async function main() {
  // ROLES

  await prisma.employeeRole.createMany({
    data: [{ role: 'VisaReviewer' }, { role: 'SystemSupervisor' }],
  });

  // VISA REVIEWERS

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

  // SYSTEM SUPERVISORS

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

  // VISA APPLICATIONS

  // B1

  const B1VisaApplication = await prisma.visaApplication.create({
    data: {
      type: 'B1',
      status: 'Interview',
      s1Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s1Notes: 'Initial review seems fine.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.personalSection.create({
    data: {
      visaId: B1VisaApplication.applicationNumber,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      phone: '555-1234',
      city: 'New York',
      address: '123 Main St',
      passportNumber: 'A12345678',
      country: 'Belize',
      dob: new Date('1990-01-01'),
      gender: 'Female',
    },
  });

  await prisma.travelSection.create({
    data: {
      visaId: B1VisaApplication.applicationNumber,
      stayCity: 'Los Angeles',
      stayAddress: '456 Elm St',
      intendedArrivalDate: new Date('2025-06-01'),
      intendedLengthOfStay: 14,
    },
  });

  await prisma.workSection.create({
    data: {
      visaId: B1VisaApplication.applicationNumber,
      occupation: 'Software Engineer',
      phone: '555-5678',
      city: 'San Francisco',
      address: '789 Pine St',
    },
  });

  await prisma.securitySection.create({
    data: {
      visaId: B1VisaApplication.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: false,
      mentalPhysicalDisorder: false,
    },
  });

  await prisma.businessSection.create({
    data: {
      visaId: B1VisaApplication.applicationNumber,
      phone: '555-9876',
      city: 'Chicago',
      address: '101 Maple St',
      purpose: 'Business Meeting',
    },
  });

  // B2

  const B2VisaApplication = await prisma.visaApplication.create({
    data: {
      type: 'B2',
      status: 'Initial',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.personalSection.create({
    data: {
      visaId: B2VisaApplication.applicationNumber,
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob.smith@example.com',
      phone: '555-5678',
      city: 'Miami',
      address: '789 Ocean Dr',
      passportNumber: 'B98765432',
      country: 'Belize',
      dob: new Date('1985-05-15'),
      gender: 'Male',
    },
  });

  await prisma.travelSection.create({
    data: {
      visaId: B2VisaApplication.applicationNumber,
      stayCity: 'Orlando',
      stayAddress: '123 Disney St',
      intendedArrivalDate: new Date('2025-07-01'),
      intendedLengthOfStay: 7,
    },
  });

  await prisma.securitySection.create({
    data: {
      visaId: B2VisaApplication.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: false,
      mentalPhysicalDisorder: false,
    },
  });

  await prisma.touristSection.create({
    data: {
      visaId: B2VisaApplication.applicationNumber,
      purpose: 'Vacation',
    },
  });

  const B2VisaApplication2 = await prisma.visaApplication.create({
    data: {
      type: 'B2',
      status: 'Interview',
      s1Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s1Notes: 'Initial review completed. Proceeding to interview stage.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.personalSection.create({
    data: {
      visaId: B2VisaApplication2.applicationNumber,
      firstName: 'Emily',
      lastName: 'Clark',
      email: 'emily.clark@example.com',
      phone: '555-7890',
      city: 'Orlando',
      address: '321 Sunshine Blvd',
      passportNumber: 'D12345678',
      country: 'Belize',
      dob: new Date('1992-03-10'),
      gender: 'Female',
    },
  });

  await prisma.travelSection.create({
    data: {
      visaId: B2VisaApplication2.applicationNumber,
      stayCity: 'Miami',
      stayAddress: '456 Beachside Ave',
      intendedArrivalDate: new Date('2025-09-15'),
      intendedLengthOfStay: 10,
    },
  });

  await prisma.securitySection.create({
    data: {
      visaId: B2VisaApplication2.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: false,
      mentalPhysicalDisorder: false,
    },
  });

  await prisma.touristSection.create({
    data: {
      visaId: B2VisaApplication2.applicationNumber,
      purpose: 'Family Vacation',
    },
  });

  // F1

  const F1VisaApplication = await prisma.visaApplication.create({
    data: {
      type: 'F1',
      status: 'Final',
      s1Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s1Notes: 'Student visa application seems fine.',
      s2Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s2Notes: 'Student visa application is good.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.personalSection.create({
    data: {
      visaId: F1VisaApplication.applicationNumber,
      firstName: 'Charlie',
      lastName: 'Brown',
      email: 'charlie.brown@example.com',
      phone: '555-6789',
      city: 'Boston',
      address: '456 Harvard St',
      passportNumber: 'C12345678',
      country: 'Belize',
      dob: new Date('2000-09-01'),
      gender: 'Male',
    },
  });

  await prisma.travelSection.create({
    data: {
      visaId: F1VisaApplication.applicationNumber,
      stayCity: 'Cambridge',
      stayAddress: '789 University Ave',
      intendedArrivalDate: new Date('2025-08-15'),
      intendedLengthOfStay: 365,
    },
  });

  await prisma.securitySection.create({
    data: {
      visaId: F1VisaApplication.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: false,
      mentalPhysicalDisorder: false,
    },
  });

  await prisma.studentSection.create({
    data: {
      visaId: F1VisaApplication.applicationNumber,
      enrolledSchool: 'Harvard University',
      schoolAddress: '1 Harvard Yard, Cambridge, MA',
      enrollmentDate: new Date('2025-09-01'),
    },
  });
}
