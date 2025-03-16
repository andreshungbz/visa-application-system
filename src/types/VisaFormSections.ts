// Visa Form Sections

import { PersonalSection } from './sections/PersonalSection.js';
import { TravelSection } from './sections/TravelSection.js';
import { WorkSection } from './sections/WorkSection.js';
import { SecuritySection } from './sections/SecuritySection.js';
import { BusinessSection } from './sections/BusinessSection.js';
import { TouristSection } from './sections/TouristSection.js';
import { StudentSection } from './sections/StudentSection.js';

export interface VisaFormSections {
  personal: PersonalSection;
  travel: TravelSection;
  work: WorkSection;
  security: SecuritySection;

  business?: BusinessSection;
  tourist?: TouristSection;
  student?: StudentSection;
}
