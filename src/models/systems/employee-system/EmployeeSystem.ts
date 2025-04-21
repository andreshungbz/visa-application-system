// Employee System Concrete Class (Implementation)

import * as argon2 from 'argon2';

import { IEmployeeSystem } from './IEmployeeSystem.js';
import { Employee } from '../../classes/employees/abstract/Employee.js';

import {
  createEmployee,
  deleteEmployee,
  readEmployees,
  readNextEmployeeNumber,
} from '../../employee-model.js';
import { EStatistics } from '../../../lib/types/EStatistics.js';
import { VisaReviewer } from '../../classes/employees/visa-reviewer/VisaReviewer.js';
import { SystemSupervisor } from '../../classes/employees/system-supervisor/SystemSupervisor.js';

export class EmployeeSystem implements IEmployeeSystem {
  // PROPERTIES (DATA MEMBERS)

  nextEmployeeNumber: number;
  private employees: Employee[];

  // CONSTRUCTOR

  constructor() {
    this.nextEmployeeNumber = 0;
    this.employees = [];

    this.initialize();
  }

  private async initialize() {
    this.nextEmployeeNumber = await readNextEmployeeNumber();
    this.employees = await readEmployees();
  }

  // MAIN METHODS

  async authenticate(
    employeeNumber: number,
    password: string
  ): Promise<boolean> {
    const employee = this.employees.find(
      (e) => e.getEmployeeNumber() === employeeNumber
    );

    if (!employee) {
      return false;
    }

    return await argon2.verify(employee.getPassword(), password);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  async addEmployee(employee: Employee) {
    try {
      // update in-memory array
      this.employees.push(employee);
      // write to database
      await createEmployee(employee);
    } catch (error) {
      console.error(error);
    }
  }

  async removeEmployee(employeeNumber: number) {
    try {
      // update in-memory arrray
      const employeeIndex = this.employees.findIndex(
        (e) => e.getEmployeeNumber() === employeeNumber
      );
      if (employeeIndex !== -1) {
        this.employees.splice(employeeIndex, 1);
      }

      // update database record
      await deleteEmployee(employeeNumber);
    } catch (error) {
      console.error(error);
    }
  }

  getEmployee(employeeNumber: number): Employee | null {
    const employeeIndex = this.employees.findIndex(
      (a) => employeeNumber === a.getEmployeeNumber()
    );

    return employeeIndex !== -1 ? this.employees[employeeIndex] : null;
  }

  async generateStatistics(): Promise<EStatistics> {
    const reviewers = this.employees.filter((e) => e instanceof VisaReviewer);
    const supervisors = this.employees.filter(
      (e) => e instanceof SystemSupervisor
    );

    return {
      totalCount: this.employees.length,
      reviewerCount: reviewers.length,
      supervisorCount: supervisors.length,
    };
  }
}
