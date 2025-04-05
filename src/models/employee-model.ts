// Filename: employee-model.ts
// functions that interface with the employee database table

import { Employee } from './classes/employees/abstract/Employee.js';

import { SystemSupervisor } from './classes/employees/system-supervisor/SystemSupervisor.js';
import { VisaReviewer } from './classes/employees/visa-reviewer/VisaReviewer.js';
import { EmployeeType } from '../lib/enums/employee-type.js';

// CREATE FUNCTIONS

export const createEmployee = async (employee: Employee): Promise<boolean> => {
  let employeeType: EmployeeType | null;

  if (employee instanceof VisaReviewer) {
    employeeType = EmployeeType.VisaReviwer;
  } else if (employee instanceof SystemSupervisor) {
    employeeType = EmployeeType.SystemSupervisor;
  } else {
    employeeType = null;
  }

  // TODO: read from database
  console.log(employeeType);

  return true;
};

// READ FUNCTIONS

export const readNextEmployeeNumber = async (): Promise<number> => {
  // TODO: read from database
  return 1;
};

export const readEmployees = async (): Promise<Employee[]> => {
  // TODO: read from database
  return [];
};

// DELETE FUNCTIONS

export const deleteEmployee = async (
  employeeNumber: number
): Promise<boolean> => {
  // TODO: change employed to false in database
  console.log(employeeNumber);

  return true;
};
