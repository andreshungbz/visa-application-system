// Employee Abstract Class (Implementation)

import { IEmployee } from './IEmployee';

import { upsertEmployee } from '../../../models/employee-model';

export abstract class Employee implements IEmployee {
  // CONSTRUCTOR

  constructor(
    protected employeeNumber: number,
    protected firstName: string,
    protected lastName: string,
    protected ssn: string,
    protected password: string,
    protected salary: number,
    protected employed: boolean = true
  ) {}

  // MAIN METHODS

  getFullName(): string {
    return `${this.getFirstName} ${this.getLastName}`;
  }
  syncERecord(): boolean {
    upsertEmployee(this);
    return true;
  }

  // GETTERS/SETTERS

  getEmployeeNumber(): number {
    return this.employeeNumber;
  }
  getFirstName(): string {
    return this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  getSSN(): string {
    return this.ssn;
  }
  getPassword(): string {
    return this.password;
  }
  getSalary(): number {
    return this.salary;
  }
  getEmployed(): boolean {
    return this.employed;
  }

  setEmployeeNumber(employeeNumber: number): boolean {
    this.employeeNumber = employeeNumber;
    return true;
  }
  setFirstName(firstName: string): boolean {
    this.firstName = firstName;
    return true;
  }
  setLastName(lastName: string): boolean {
    this.lastName = lastName;
    return true;
  }
  setSSN(ssn: string): boolean {
    this.ssn = ssn;
    return true;
  }
  setPassword(password: string): boolean {
    this.password = password;
    return true;
  }
  setSalary(salary: number): boolean {
    this.salary = salary;
    return true;
  }
  setEmployed(checked: boolean): boolean {
    this.employed = checked;
    return true;
  }
}
