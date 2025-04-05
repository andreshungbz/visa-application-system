// B2 Tourist/Medical Visa Form Concrete Class (Implementation)

import { VisaForm } from '../abstract/VisaForm.js';
import { IB2Form } from './IB2Form.js';

import {
  PersonalSection,
  TravelSection,
  WorkSection,
  SecuritySection,
  TouristSection,
} from '@prisma/client';

import { VisaFormSections } from '../../../../lib/types/VisaFormSections.js';
import { createVFTourist } from '../../../../models/visa-form-model.js';

export class B2Form extends VisaForm implements IB2Form {
  // CONSTRUCTOR

  constructor(
    protected personal: PersonalSection,
    protected travel: TravelSection,
    protected work: WorkSection,
    protected security: SecuritySection,
    protected tourist: TouristSection
  ) {
    super(personal, travel, work, security);
  }

  // MAIN METHODS (OVERRIDE)

  getSections(): VisaFormSections {
    return {
      personal: this.personal,
      travel: this.travel,
      work: this.work,
      security: this.security,
      tourist: this.tourist,
    };
  }

  async syncVFRecord(): Promise<void> {
    try {
      await super.syncVFRecord();
      await createVFTourist(this.tourist);
    } catch (error) {
      console.error(error);
    }
  }

  // GETTERS/SETTERS

  // tourist section

  b2_getPurpose(): string {
    return this.tourist.purpose;
  }

  b2_setPurpose(purpose: string): boolean {
    this.tourist.purpose = purpose;
    return true;
  }
}
