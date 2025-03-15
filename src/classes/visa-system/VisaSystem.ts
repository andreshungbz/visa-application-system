// Visa System Concrete Class (Implementation)

import { IVisaSystem } from './IVisaSystem';

import { Employee } from '../employees/abstract/Employee';
import { VisaApplication } from '../visa-application/VisaApplication';
import { VisaStatus } from '../../enums/visa-status';

import {
  getEmployees,
  getS1VisaApplications,
  getS2VisaApplications,
  getS3VisaApplications,
} from '../../models/visa-application-model';

export class VisaSystem implements IVisaSystem {
  // PROPERTIES (DATA MEMBERS)

  private employees: Employee[];
  private initialQueue: VisaApplication[];
  private interviewQueue: VisaApplication[];
  private finalQueue: VisaApplication[];

  // CONSTRUCTOR

  constructor() {
    this.employees = getEmployees();
    this.initialQueue = getS1VisaApplications();
    this.interviewQueue = getS2VisaApplications();
    this.finalQueue = getS3VisaApplications();
  }

  // MAIN METHODS

  authenticate(_employeeNumber: number, _password: string): boolean {
    return true;
  }

  addVisaApplication(application: VisaApplication): boolean {
    this.initialQueue.push(application);
    return true;
  }

  getVisaApplicationStatus(applicationNumber: number): VisaStatus | null {
    let applicationIndex: number;

    applicationIndex = this.initialQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.initialQueue[applicationIndex].getStatus();
    }

    applicationIndex = this.interviewQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.interviewQueue[applicationIndex].getStatus();
    }

    applicationIndex = this.finalQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.finalQueue[applicationIndex].getStatus();
    }

    return null;
  }

  getFullVisaApplication(applicationNumber: number): VisaApplication | null {
    let applicationIndex: number;

    applicationIndex = this.initialQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.initialQueue[applicationIndex];
    }

    applicationIndex = this.interviewQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.interviewQueue[applicationIndex];
    }

    applicationIndex = this.finalQueue.findIndex(
      (a) => applicationNumber === a.getApplicationNumber()
    );
    if (applicationIndex !== -1) {
      return this.finalQueue[applicationIndex];
    }

    return null;
  }

  getInitialQueue(): VisaApplication[] {
    return this.initialQueue;
  }

  getInterviewQueue(): VisaApplication[] {
    return this.interviewQueue;
  }

  getFinalQueue(): VisaApplication[] {
    return this.finalQueue;
  }

  getEmployeeDetails(employeeNumber: number): Employee | null {
    const employeeIndex = this.employees.findIndex(
      (e) => employeeNumber === e.getEmployeeNumber()
    );

    return employeeIndex !== -1 ? this.employees[employeeIndex] : null;
  }
}
