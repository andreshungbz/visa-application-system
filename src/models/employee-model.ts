// Filename: employee-model.ts
// functions that interface with the employee database table

import { Employee } from '../classes/employees/abstract/Employee';

import { SystemSupervisor } from '../classes/employees/system-supervisor/SystemSupervisor';
import { VisaReviewer } from '../classes/employees/visa-reviewer/VisaReviewer';
import { EmployeeType } from '../enums/employee-type';

// CREATE FUNCTIONS

export const createEmployee = (employee: Employee): boolean => {
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

export const readNextEmployeeNumber = (): number => {
  return 1;
};

export const readEmployees = (): Employee[] => {
  return [];
};

// DELETE FUNCTIONS

export const deleteEmployee = (employeeNumber: number): boolean => {
  // TODO: change employed to false in database
  console.log(employeeNumber);

  return true;
};
