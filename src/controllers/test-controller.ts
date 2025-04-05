import { Request, Response } from 'express';
import { vs, es } from '../main.js';
import {
  PersonalSection,
  TravelSection,
  WorkSection,
  SecuritySection,
  TouristSection,
} from '@prisma/client';
import { B2Form } from '../models/classes/visa-forms/B2/B2Form.js';
import { VisaReviewer } from '../models/classes/employees/visa-reviewer/VisaReviewer.js';

export const test = async (_req: Request, res: Response) => {
  const initial = vs.getInitialQueue();
  const interview = vs.getInterviewQueue();
  const final = vs.getFinalQueue();
  const approved = vs.getApproved();
  const rejected = vs.getRejected();
  const employees = es.getEmployees();

  res.json({
    initial,
    interview,
    final,
    approved,
    rejected,
    employees,
  });
};

export const testAdd = async (_req: Request, res: Response) => {
  const visaId = vs.nextApplicationNumber;

  const personal: PersonalSection = {
    visaId,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-1234',
    city: 'New York',
    address: '123 Main St',
    passportNumber: 'A12345678',
    country: 'USA',
    dob: new Date('1990-01-01'),
    gender: 'Male',
  };

  const travel: TravelSection = {
    visaId,
    stayCity: 'Los Angeles',
    stayAddress: '456 Elm St',
    intendedArrivalDate: new Date('2025-06-01'),
    intendedLengthOfStay: 14,
  };

  const work: WorkSection = {
    visaId,
    occupation: 'Software Engineer',
    phone: '555-5678',
    city: 'San Francisco',
    address: '789 Pine St',
  };

  const security: SecuritySection = {
    visaId,
    communicableDisease: false,
    moneyLaundering: false,
    drugConspiracy: false,
    arrestedConvicted: false,
    mentalPhysicalDisorder: false,
  };

  const tourist: TouristSection = {
    visaId,
    purpose: 'Vacation',
  };

  const form = new B2Form(personal, travel, work, security, tourist);

  const id = await vs.addVisaApplication(form);

  res.send(`${id}`);
};

export const testGetStatus = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  res.json(vs.getVisaApplicationStatus(id));
};

export const testGetApplication = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  res.json(vs.getFullVisaApplication(id));
};

export const testAddEmployee = async (_req: Request, res: Response) => {
  const employeeID = es.nextEmployeeNumber;

  const employee = new VisaReviewer(
    employeeID,
    'Jacky',
    'Saul',
    '434232',
    'rough',
    10000
  );

  await es.addEmployee(employee);

  res.json(`${employeeID}`);
};
