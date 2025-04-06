// System Supervisor Concrete Class (Implementation)

import { Employee } from '../abstract/Employee.js';
import { ISystemSupervisor } from './ISystemSupervisor.js';

import { es, vs } from '../../../../main.js';

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

  async generateStatisticsReport(): Promise<{}> {
    return {
      vs: await vs.generateStatistics(),
      es: await es.generateStatistics(),
    };
  }
}
