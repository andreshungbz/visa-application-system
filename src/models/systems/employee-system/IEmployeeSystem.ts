// Employee System Interface (Header)

import { Employee } from '../../classes/employees/abstract/Employee.js';

export interface IEmployeeSystem {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // nextEmployeeNumber: number;
  // employees: Employee[];

  // MAIN METHODS

  authenticate(employeeNumber: number, password: string): Promise<boolean>;
  getEmployees(): Employee[];
  addEmployee(employee: Employee): Promise<void>;
  removeEmployee(employeeNumber: number): Promise<void>;

  generateStatistics(): Promise<{}>;
}
