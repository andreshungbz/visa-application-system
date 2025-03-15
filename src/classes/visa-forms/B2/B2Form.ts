// B2 Tourist/Medical Visa Form Concrete Class (Implementation)

import { VisaForm } from '../abstract/VisaForm';
import { IB2Form } from './IB2Form';

import { PersonalSection } from '../../../types/sections/PersonalSection';
import { TravelSection } from '../../../types/sections/TravelSection';
import { WorkSection } from '../../../types/sections/WorkSection';
import { SecuritySection } from '../../../types/sections/SecuritySection';
import { TouristSection } from '../../../types/sections/TouristSection';
import { VisaFormSections } from '../../../types/VisaFormSections';
import { createVFTourist } from '../../../models/visa-form-model';

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

  async syncVFRecord(applicationNumber: number): Promise<boolean> {
    super.syncVFRecord(applicationNumber);
    createVFTourist(applicationNumber, this.tourist);

    return true;
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
