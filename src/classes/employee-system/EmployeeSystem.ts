// Employee System Concrete Class (Implementation)

import { IEmployeeSystem } from './IEmployeeSystem.js';
import { Employee } from '../employees/abstract/Employee.js';

import {
  createEmployee,
  deleteEmployee,
  readEmployees,
  readNextEmployeeNumber,
} from '../../models/employee-model.js';

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

  authenticate(employeeNumber: number, password: string): boolean {
    // TODO: implement authentication checking
    console.log(employeeNumber, password);

    return true;
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  async addEmployee(employee: Employee): Promise<boolean> {
    // ADD TO CLASS MEMORY
    this.employees.push(employee);
    // WRITE TO DATABASE
    await createEmployee(employee);

    return true;
  }

  async removeEmployee(employeeNumber: number): Promise<boolean> {
    // REMOVE FROM CLASS MEMORY

    const employeeIndex = this.employees.findIndex(
      (e) => e.getEmployeeNumber() === employeeNumber
    );

    if (employeeIndex !== -1) {
      this.employees.splice(employeeIndex, 1);
      return true;
    }

    // UPDATE DATABASE
    await deleteEmployee(employeeNumber);

    return false;
  }

  async generateStatistics(): Promise<{}> {
    return {};
  }
}
