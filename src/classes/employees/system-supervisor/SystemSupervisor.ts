// System Supervisor Concrete Class (Implementation)

import { Employee } from '../abstract/Employee';
import { ISystemSupervisor } from './ISystemSupervisor';

import { EmployeeType } from '../../../enums/employee-type';
import { VisaReviewer } from '../visa-reviewer/VisaReviewer';

import { es, vs } from '../../../app';

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

  addEmployee(
    type: EmployeeType,
    employeeNumber: number,
    firstName: string,
    lastName: string,
    ssn: string,
    password: string,
    salary: number
  ): boolean {
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
      es.addEmployee(newEmployee);
    }

    return true;
  }

  removeEmployee(employeeNumber: number): boolean {
    es.removeEmployee(employeeNumber);
    return true;
  }

  generateStatisticsReport(): {} {
    return {
      vs: vs.generateStatistics(),
      es: es.generateStatistics(),
    };
  }
}
