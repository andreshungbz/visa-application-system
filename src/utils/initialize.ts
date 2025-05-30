// Filename: initialize.ts
// functions that creates VisaSystem instance

import { EmployeeSystem } from '../models/systems/employee-system/EmployeeSystem.js';
import { VisaSystem } from '../models/systems/visa-system/VisaSystem.js';

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
