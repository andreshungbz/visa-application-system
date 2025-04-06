// System Supervisor Interface (Header)

import { IEmployee } from '../abstract/IEmployee.js';

export interface ISystemSupervisor extends IEmployee {
  // PROPERTIES (DATA MEMBERS)
  // these are commented so that the implementation can apply protected/private access specifiers
  // specifying these properties in the interface would mean the implementation properties would have to be public

  // no additional properties

  // MAIN METHODS

  generateStatisticsReport(): Promise<{}>;
}
