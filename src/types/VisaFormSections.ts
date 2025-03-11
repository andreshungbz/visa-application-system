// Visa Form Sections

import { PersonalSection } from './sections/PersonalSection';
import { TravelSection } from './sections/TravelSection';
import { WorkSection } from './sections/WorkSection';
import { SecuritySection } from './sections/SecuritySection';
import { BusinessSection } from './sections/BusinessSection';
import { TouristSection } from './sections/TouristSection';
import { StudentSection } from './sections/StudentSection';

export interface VisaFormSections {
  personal: PersonalSection;
  travel: TravelSection;
  work: WorkSection;
  security: SecuritySection;

  business?: BusinessSection;
  tourist?: TouristSection;
  student?: StudentSection;
}
