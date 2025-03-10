// B1 Business Visa Form Concrete Class (Implementation)

import { VisaForm } from '../abstract/VisaForm';
import { IB1Form } from './IB1Form';

import { PersonalSection } from '../../types/sections/PersonalSection';
import { TravelSection } from '../../types/sections/TravelSection';
import { WorkSection } from '../../types/sections/WorkSection';
import { SecuritySection } from '../../types/sections/SecuritySection';
import { BusinessSection } from '../../types/sections/BusinessSection';
import { VisaFormSections } from '../../types/VisaFormSections';

export class B1Form extends VisaForm implements IB1Form {
  // CONSTRUCTOR

  constructor(
    protected personal: PersonalSection,
    protected travel: TravelSection,
    protected work: WorkSection,
    protected security: SecuritySection,
    protected business: BusinessSection
  ) {
    super(personal, travel, work, security);
  }

  // MAIN METHODS (OVERRIDE)

  getProperties(): VisaFormSections {
    return {
      personal: this.personal,
      travel: this.travel,
      work: this.work,
      security: this.security,
      business: this.business,
    };
  }

  insertRecord(): boolean {
    return true;
  }

  // GETTERS/SETTERS

  // business section

  b1_getPhone(): string {
    return this.business.phone;
  }
  b1_getCity(): string {
    return this.business.city;
  }
  b1_getAddress(): string {
    return this.business.address;
  }
  b1_getPurpose(): string {
    return this.business.purpose;
  }

  b1_setPhone(phone: string): boolean {
    this.business.phone = phone;
    return true;
  }
  b1_setCity(city: string): boolean {
    this.business.city = city;
    return true;
  }
  b1_setAddress(address: string): boolean {
    this.business.address = address;
    return true;
  }
  b1_setPurpose(purpose: string): boolean {
    this.business.purpose = purpose;
    return true;
  }
}
