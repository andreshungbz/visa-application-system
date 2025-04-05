// Filename: employee-model.ts
// functions that interface with the employee database table

import { PrismaClient } from '@prisma/client';

import { Employee } from './classes/employees/abstract/Employee.js';

import { SystemSupervisor } from './classes/employees/system-supervisor/SystemSupervisor.js';
import { VisaReviewer } from './classes/employees/visa-reviewer/VisaReviewer.js';

import { EmployeeType } from '@prisma/client';

const prisma = new PrismaClient();

// CREATE FUNCTIONS

export const createEmployee = async (employee: Employee) => {
  try {
    let type: EmployeeType | null;
    if (employee instanceof VisaReviewer) {
      type = EmployeeType.VisaReviewer;
    } else if (employee instanceof SystemSupervisor) {
      type = EmployeeType.SystemSupervisor;
    } else {
      throw new Error('Employee Type does not exist.');
    }

    await prisma.employee.create({
      data: {
        employeeNumber: employee.getEmployeeNumber(),
        role: type,
        firstName: employee.getFirstName(),
        lastName: employee.getLastName(),
        ssn: employee.getSSN(),
        password: employee.getPassword(),
        salary: employee.getSalary(),
        employed: employee.getEmployed(),
      },
    });
  } catch (error) {
    throw error;
  }
};

// READ FUNCTIONS

export const readNextEmployeeNumber = async (): Promise<number> => {
  try {
    const result = await prisma.employee.findMany({
      orderBy: {
        employeeNumber: 'desc',
      },
      take: 1,
    });

    return result.length > 0 ? result[0].employeeNumber + 1 : 1;
  } catch (error) {
    throw error;
  }
};

export const readEmployees = async (): Promise<Employee[]> => {
  try {
    const result = await prisma.employee.findMany({
      where: {
        employed: true,
      },
      orderBy: {
        employeeNumber: 'asc',
      },
    });

    return result.map((employee) => {
      switch (employee.role) {
        case 'VisaReviewer':
          return new VisaReviewer(
            employee.employeeNumber,
            employee.firstName,
            employee.lastName,
            employee.ssn,
            employee.password,
            employee.salary
          );
        case 'SystemSupervisor':
          return new SystemSupervisor(
            employee.employeeNumber,
            employee.firstName,
            employee.lastName,
            employee.ssn,
            employee.password,
            employee.salary
          );
        default:
          throw new Error('Employee role does not exist.');
      }
    });
  } catch (error) {
    throw error;
  }
};

// DELETE FUNCTIONS

export const deleteEmployee = async (employeeNumber: number) => {
  try {
    await prisma.employee.update({
      where: {
        employeeNumber: employeeNumber,
      },
      data: {
        employed: false,
      },
    });
  } catch (error) {
    throw error;
  }
};
