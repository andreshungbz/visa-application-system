// Employee System Interface (Header)

import { Employee } from '../employees/abstract/Employee';

export interface IEmployeeSystem {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // employees: Employee[];

  // MAIN METHODS

  authenticate(employeeNumber: number, password: string): boolean;
  getEmployees(): Employee[];
  addEmployee(employee: Employee): boolean;
  removeEmployee(employeeNumber: number): boolean;

  generateStatistics(): {};
}
