// Filename: initiateVisaSystem.ts
// functions that creates VisaSystem instance

import { EmployeeSystem } from '../classes/employee-system/EmployeeSystem.js';
import { VisaSystem } from '../classes/visa-system/VisaSystem.js';

export const initializeVisaSystem = (): VisaSystem => {
  console.time('[INIT] Visa System Initialization Loading Time');
  const system = new VisaSystem();
  console.timeEnd('[INIT] Visa System Initialization Loading Time');

  return system;
};

export const initializeEmployeeSystem = (): EmployeeSystem => {
  console.time('[INIT] Employee System Initialization Loading Time');
  const system = new EmployeeSystem();
  console.timeEnd('[INIT] Employee System Initialization Loading Time');

  return system;
};
