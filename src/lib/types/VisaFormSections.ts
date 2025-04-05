// Visa Form Sections

import {
  PersonalSection,
  TravelSection,
  WorkSection,
  SecuritySection,
  BusinessSection,
  TouristSection,
  StudentSection,
} from '@prisma/client';

export interface VisaFormSections {
  personal: PersonalSection;
  travel: TravelSection;
  work: WorkSection;
  security: SecuritySection;

  business?: BusinessSection;
  tourist?: TouristSection;
  student?: StudentSection;
}
