// Filename: initiateVisaSystem.ts
// functions that creates VisaSystem instance

import { VisaSystem } from '../classes/visa-system/VisaSystem';

export const initiateVisaSystem = (): VisaSystem => {
  console.time('Visa System Initialization Loading Time');
  const system = new VisaSystem();
  console.timeEnd('Visa System Initialization Loading Time');

  return system;
};
