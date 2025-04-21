// System Supervisor Concrete Class (Implementation)

import { Employee } from '../abstract/Employee.js';
import { ISystemSupervisor } from './ISystemSupervisor.js';

export class SystemSupervisor extends Employee implements ISystemSupervisor {
  // CONSTRUCTOR

  constructor(
    protected employeeNumber: number,
    protected firstName: string,
    protected lastName: string,
    protected ssn: string,
    protected password: string,
    protected salary: number
  ) {
    super(employeeNumber, firstName, lastName, ssn, password, salary);
  }

  // MAIN FUNCTIONS

  // async generateStatisticsReport(): Promise<{}> {
  //   return {};
  // }
}
