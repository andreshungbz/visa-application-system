// System Supervisor Concrete Class (Implementation)

import { Employee } from '../abstract/Employee';
import { ISystemSupervisor } from './ISystemSupervisor';

import { VisaReviewer } from '../visa-reviewer/VisaReviewer';

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

  // OVERRIDES

  syncERecord(): boolean {
    return true;
  }

  // MAIN FUNCTIONS

  addVisaReviewer(
    firstName: string,
    lastName: string,
    ssn: string,
    password: string,
    salary: number
  ): boolean {
    const nextEmployeeIdFromDB = 10;
    const vr = new VisaReviewer(
      nextEmployeeIdFromDB,
      firstName,
      lastName,
      ssn,
      password,
      salary
    );

    vr.syncERecord();

    return true;
  }

  removeVisaReviewer(_employeeNumber: number): boolean {
    return true;
  }

  generateSystemStatistics(): {} {
    return {};
  }
}
