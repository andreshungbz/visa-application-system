// Filename: visa-application-model.ts
// functions that interface with the visa application database table

import { PrismaClient, VisaStatus } from '@prisma/client';

import { VisaApplication } from './classes/visa-application/VisaApplication.js';
import { VisaForm } from './classes/visa-forms/abstract/VisaForm.js';
import { ReviewerNotes } from '../lib/types/ReviwerNotes.js';
import { B1Form } from './classes/visa-forms/B1/B1Form.js';
import { B2Form } from './classes/visa-forms/B2/B2Form.js';
import { F1Form } from './classes/visa-forms/F1/F1Form.js';

const prisma = new PrismaClient();

// CREATE FUNCTIONS

export const createVisaApplication = async (application: VisaApplication) => {
  try {
    await prisma.visaApplication.create({
      data: {
        applicationNumber: application.getApplicationNumber(),
        type: application.getType(),
        status: application.getStatus(),
        s1Reviewer: application.getS1Reviewer(),
        s1Notes: application.getS1Notes(),
        s2Reviewer: application.getS2Reviewer(),
        s2Notes: application.getS2Notes(),
        s3Reviewer: application.getS3Reviewer(),
        s3Notes: application.getS3Notes(),
        createdAt: application.getCreatedAt(),
        updatedAt: application.getUpdatedAt(),
      },
    });

    // write sections to database
    application.getForm().syncVFRecord();
  } catch (error) {
    throw error;
  }
};

// READ FUNCTIONS

export const readNextApplicationNumber = async (): Promise<number> => {
  try {
    const result = await prisma.visaApplication.findMany({
      orderBy: {
        applicationNumber: 'desc',
      },
      take: 1,
    });

    return result.length > 0 ? result[0].applicationNumber + 1 : 1;
  } catch (error) {
    throw error;
  }
};

export const readVisaApplications = async (
  status: VisaStatus
): Promise<VisaApplication[]> => {
  try {
    const result = await prisma.visaApplication.findMany({
      where: {
        status: status,
      },
      orderBy: {
        updatedAt: 'asc',
      },
      include: {
        personal: true,
        travel: true,
        work: true,
        security: true,
        business: true,
        tourist: true,
        student: true,
      },
    });

    return result.map((application) => {
      const notes: ReviewerNotes = {
        initial: {
          reviewer: application.s1Reviewer,
          notes: application.s1Notes,
        },
        interview: {
          reviewer: application.s2Reviewer,
          notes: application.s2Notes,
        },
        final: { reviewer: application.s3Reviewer, notes: application.s3Notes },
      };

      let form: VisaForm;
      switch (application.type) {
        case 'B1':
          form = new B1Form(
            application.personal!,
            application.travel!,
            application.work!,
            application.security!,
            application.business!
          );
          break;
        case 'B2':
          form = new B2Form(
            application.personal!,
            application.travel!,
            application.work!,
            application.security!,
            application.tourist!
          );
          break;
        case 'F1':
          form = new F1Form(
            application.personal!,
            application.travel!,
            application.work!,
            application.security!,
            application.student!
          );
          break;
        default:
          throw new Error('No existing VisaType');
      }

      return new VisaApplication(
        application.applicationNumber,
        application.type,
        application.status,
        form,
        notes,
        application.createdAt,
        application.updatedAt
      );
    });
  } catch (error) {
    throw error;
  }
};

// UPDATE FUNCTIONS

export const updateStatus = async (
  status: VisaStatus,
  applicationNumber: number,
  name: string,
  notes: string
) => {
  try {
    switch (status) {
      case 'Initial':
        await prisma.visaApplication.update({
          where: {
            applicationNumber: applicationNumber,
          },
          data: {
            s1Reviewer: name,
            s1Notes: notes,
            status: 'Interview',
          },
        });
        break;
      case 'Interview':
        await prisma.visaApplication.update({
          where: {
            applicationNumber: applicationNumber,
          },
          data: {
            s2Reviewer: name,
            s2Notes: notes,
            status: 'Final',
          },
        });
        break;
      case 'Final':
        await prisma.visaApplication.update({
          where: {
            applicationNumber: applicationNumber,
          },
          data: {
            s3Reviewer: name,
            s3Notes: notes,
            status: 'Approved',
          },
        });
        break;
      case 'Rejected':
        await prisma.visaApplication.update({
          where: {
            applicationNumber: applicationNumber,
          },
          data: {
            s3Reviewer: name,
            s3Notes: notes,
            status: 'Rejected',
          },
        });
        break;
      default:
        throw new Error('Invalid Visa Status.');
    }
  } catch (error) {
    throw error;
  }
};
