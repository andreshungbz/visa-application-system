// System Supervisor Interface (Header)

import { IEmployee } from '../abstract/IEmployee.js';

import { EmployeeType } from '../../../enums/employee-type.js';

export interface ISystemSupervisor extends IEmployee {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // no additional properties

  // MAIN METHODS

  addEmployee(
    type: EmployeeType,
    employeeNumber: number,
    firstName: string,
    lastName: string,
    ssn: string,
    password: string,
    salary: number
  ): Promise<boolean>;
  removeEmployee(employeeNumber: number): Promise<boolean>;

  generateStatisticsReport(): Promise<{}>;
}
