// Filename: employee-model.ts
// functions that interface with the employee database table

import { Employee } from '../classes/employees/abstract/Employee.js';

import { SystemSupervisor } from '../classes/employees/system-supervisor/SystemSupervisor.js';
import { VisaReviewer } from '../classes/employees/visa-reviewer/VisaReviewer.js';
import { EmployeeType } from '../enums/employee-type.js';

// CREATE FUNCTIONS

export const createEmployee = async (employee: Employee): Promise<boolean> => {
  // TODO: write to database
  let employeeType: EmployeeType | null;

  if (employee instanceof VisaReviewer) {
    employeeType = EmployeeType.VisaReviwer;
  } else if (employee instanceof SystemSupervisor) {
    employeeType = EmployeeType.SystemSupervisor;
  } else {
    employeeType = null;
  }

  console.log(employeeType);

  return true;
};

// READ FUNCTIONS

export const readNextEmployeeNumber = async (): Promise<number> => {
  return 1;
};

export const readEmployees = async (): Promise<Employee[]> => {
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
