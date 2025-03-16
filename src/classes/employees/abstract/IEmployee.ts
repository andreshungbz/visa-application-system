// Employee Interface (Header)

export interface IEmployee {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // employeeNumber: number;
  // firstName: string;
  // lastName: string;
  // ssn: string;
  // password: string;
  // salary: number;
  // employed: boolean;

  // MAIN METHODS

  getFullName(): string;

  // GETTERS/SETTERS

  getEmployeeNumber(): number;
  getFirstName(): string;
  getLastName(): string;
  getSSN(): string;
  getPassword(): string;
  getSalary(): number;
  getEmployed(): boolean;

  setEmployeeNumber(employeeNumber: number): boolean;
  setFirstName(firstName: string): boolean;
  setLastName(lastName: string): boolean;
  setSSN(ssn: string): boolean;
  setPassword(password: string): boolean;
  setSalary(salary: number): boolean;
  setEmployed(checked: boolean): boolean;
}
