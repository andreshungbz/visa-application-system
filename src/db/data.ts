// Filename: data.ts
// inserts example data to work with

import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';

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

  const reviewerPassword = await argon2.hash('password');
  const reviewer = await prisma.employee.create({
    data: {
      role: 'VisaReviewer',
      firstName: 'Andres',
      lastName: 'Hung',
      ssn: '123-45-6789',
      password: reviewerPassword,
      salary: 50000,
      employed: true,
    },
  });

  // SYSTEM SUPERVISORS

  const supervisorPassword = await argon2.hash('password2');
  await prisma.employee.create({
    data: {
      role: 'SystemSupervisor',
      firstName: 'Darwin',
      lastName: 'Ramos',
      ssn: '987-65-4321',
      password: supervisorPassword,
      salary: 70000,
      employed: true,
    },
  });

  // VISA APPLICATIONS

  // B1

  const B1VisaApplication1 = await prisma.visaApplication.create({
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
      visaId: B1VisaApplication1.applicationNumber,
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
      visaId: B1VisaApplication1.applicationNumber,
      stayCity: 'Los Angeles',
      stayAddress: '456 Elm St',
      intendedArrivalDate: new Date('2025-06-01'),
      intendedLengthOfStay: 14,
    },
  });

  await prisma.workSection.create({
    data: {
      visaId: B1VisaApplication1.applicationNumber,
      occupation: 'Software Engineer',
      phone: '555-5678',
      city: 'San Francisco',
      address: '789 Pine St',
    },
  });

  await prisma.securitySection.create({
    data: {
      visaId: B1VisaApplication1.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: false,
      mentalPhysicalDisorder: false,
    },
  });

  await prisma.businessSection.create({
    data: {
      visaId: B1VisaApplication1.applicationNumber,
      phone: '555-9876',
      city: 'Chicago',
      address: '101 Maple St',
      purpose: 'Business Meeting',
    },
  });

  // B2

  const B2VisaApplication1 = await prisma.visaApplication.create({
    data: {
      type: 'B2',
      status: 'Initial',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.personalSection.create({
    data: {
      visaId: B2VisaApplication1.applicationNumber,
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
      visaId: B2VisaApplication1.applicationNumber,
      stayCity: 'Orlando',
      stayAddress: '123 Disney St',
      intendedArrivalDate: new Date('2025-07-01'),
      intendedLengthOfStay: 7,
    },
  });

  await prisma.securitySection.create({
    data: {
      visaId: B2VisaApplication1.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: false,
      mentalPhysicalDisorder: false,
    },
  });

  await prisma.touristSection.create({
    data: {
      visaId: B2VisaApplication1.applicationNumber,
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

  const F1VisaApplication1 = await prisma.visaApplication.create({
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
      visaId: F1VisaApplication1.applicationNumber,
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
      visaId: F1VisaApplication1.applicationNumber,
      stayCity: 'Cambridge',
      stayAddress: '789 University Ave',
      intendedArrivalDate: new Date('2025-08-15'),
      intendedLengthOfStay: 365,
    },
  });

  await prisma.securitySection.create({
    data: {
      visaId: F1VisaApplication1.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: false,
      mentalPhysicalDisorder: false,
    },
  });

  await prisma.studentSection.create({
    data: {
      visaId: F1VisaApplication1.applicationNumber,
      enrolledSchool: 'Harvard University',
      schoolAddress: '1 Harvard Yard, Cambridge, MA',
      enrollmentDate: new Date('2025-09-01'),
    },
  });

  // APPROVED

  const ApprovedVisaApplication1 = await prisma.visaApplication.create({
    data: {
      type: 'B1',
      status: 'Approved', // Set status to Approved
      s1Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s1Notes: 'Initial review completed.',
      s2Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s2Notes: 'Interview successful.',
      s3Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s3Notes: 'Final review approved.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.personalSection.create({
    data: {
      visaId: ApprovedVisaApplication1.applicationNumber,
      firstName: 'Sophia',
      lastName: 'Williams',
      email: 'sophia.williams@example.com',
      phone: '555-9876',
      city: 'Seattle',
      address: '123 Green St',
      passportNumber: 'E12345678',
      country: 'Belize',
      dob: new Date('1995-04-20'),
      gender: 'Female',
    },
  });

  await prisma.travelSection.create({
    data: {
      visaId: ApprovedVisaApplication1.applicationNumber,
      stayCity: 'San Diego',
      stayAddress: '789 Ocean Blvd',
      intendedArrivalDate: new Date('2025-10-01'),
      intendedLengthOfStay: 30,
    },
  });

  await prisma.securitySection.create({
    data: {
      visaId: ApprovedVisaApplication1.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: false,
      mentalPhysicalDisorder: false,
    },
  });

  await prisma.businessSection.create({
    data: {
      visaId: ApprovedVisaApplication1.applicationNumber,
      phone: '555-1234',
      city: 'San Francisco',
      address: '456 Business St',
      purpose: 'Conference Attendance',
    },
  });

  // REJECTED

  const RejectedVisaApplication1 = await prisma.visaApplication.create({
    data: {
      type: 'F1',
      status: 'Rejected',
      s1Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s1Notes: 'Initial review completed.',
      s3Reviewer: reviewer.firstName + ' ' + reviewer.lastName,
      s3Notes: 'Final review rejected.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.personalSection.create({
    data: {
      visaId: RejectedVisaApplication1.applicationNumber,
      firstName: 'James',
      lastName: 'Taylor',
      email: 'james.taylor@example.com',
      phone: '555-4321',
      city: 'Houston',
      address: '456 Maple Ave',
      passportNumber: 'F12345678',
      country: 'Belize',
      dob: new Date('1988-07-15'),
      gender: 'Male',
    },
  });

  await prisma.travelSection.create({
    data: {
      visaId: RejectedVisaApplication1.applicationNumber,
      stayCity: 'Las Vegas',
      stayAddress: '123 Casino St',
      intendedArrivalDate: new Date('2025-11-01'),
      intendedLengthOfStay: 5,
    },
  });

  await prisma.securitySection.create({
    data: {
      visaId: RejectedVisaApplication1.applicationNumber,
      communicableDisease: false,
      moneyLaundering: false,
      drugConspiracy: false,
      arrestedConvicted: true,
      mentalPhysicalDisorder: false,
    },
  });

  await prisma.studentSection.create({
    data: {
      visaId: RejectedVisaApplication1.applicationNumber,
      enrolledSchool: 'Stanford University',
      schoolAddress: '450 Serra Mall, Stanford, CA',
      enrollmentDate: new Date('2025-09-01'),
    },
  });
}
