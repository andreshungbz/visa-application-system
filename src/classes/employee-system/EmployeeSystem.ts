// Employee System Concrete Class (Implementation)

import { IEmployeeSystem } from './IEmployeeSystem';
import { Employee } from '../employees/abstract/Employee';

import { deleteEmployee, readEmployees } from '../../models/employee-model';

export class EmployeeSystem implements IEmployeeSystem {
  // PROPERTIES (DATA MEMBERS)

  private employees: Employee[];

  // CONSTRUCTOR

  constructor() {
    this.employees = readEmployees();
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

  addEmployee(employee: Employee): boolean {
    // ADD TO CLASS MEMORY
    this.employees.push(employee);
    // WRITE TO DATABASE
    employee.syncERecord();

    return true;
  }

  removeEmployee(employeeNumber: number): boolean {
    // REMOVE FROM CLASS MEMORY

    const employeeIndex = this.employees.findIndex(
      (e) => e.getEmployeeNumber() === employeeNumber
    );

    if (employeeIndex !== -1) {
      this.employees.splice(employeeIndex, 1);
      return true;
    }

    // UPDATE DATABASE
    deleteEmployee(employeeNumber);

    return false;
  }

  generateStatistics(): {} {
    return {};
  }
}
