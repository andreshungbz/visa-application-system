// Filename: employee-model.ts
// functions that interface with the employee database table

import { Employee } from '../classes/employees/abstract/Employee';

// CREATE FUNCTIONS

export const createEmployee = (employee: Employee): boolean => {
  // TODO: write to database
  console.log(employee);

  return true;
};

// READ FUNCTIONS

export const readEmployees = (): Employee[] => {
  return [];
};
