// System Supervisor Concrete Class (Implementation)

import { Employee } from '../abstract/Employee.js';
import { ISystemSupervisor } from './ISystemSupervisor.js';

import { EmployeeType } from '../../../../lib/enums/employee-type.js';
import { VisaReviewer } from '../visa-reviewer/VisaReviewer.js';

import { es, vs } from '../../../../app.js';

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

  async addEmployee(
    type: EmployeeType,
    employeeNumber: number,
    firstName: string,
    lastName: string,
    ssn: string,
    password: string,
    salary: number
  ): Promise<boolean> {
    let newEmployee: Employee | null = null;

    if (type === EmployeeType.VisaReviwer) {
      newEmployee = new VisaReviewer(
        employeeNumber,
        firstName,
        lastName,
        ssn,
        password,
        salary
      );
    } else if (type === EmployeeType.SystemSupervisor) {
      newEmployee = new SystemSupervisor(
        employeeNumber,
        firstName,
        lastName,
        ssn,
        password,
        salary
      );
    }

    if (newEmployee) {
      await es.addEmployee(newEmployee);
    }

    return true;
  }

  async removeEmployee(employeeNumber: number): Promise<boolean> {
    await es.removeEmployee(employeeNumber);
    return true;
  }

  async generateStatisticsReport(): Promise<{}> {
    return {
      vs: await vs.generateStatistics(),
      es: await es.generateStatistics(),
    };
  }
}
