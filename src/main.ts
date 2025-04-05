// Filename: app.ts
// main gateway to Express server

import express from 'express';
import path from 'node:path';

import { config } from './config/app.config.js';
import { logger } from './middleware/logger.js';
import { getLocalIPAddress } from './utils/getLocalIPAddress.js';

import {
  initializeVisaSystem,
  initializeEmployeeSystem,
} from './utils/initialize.js';

import { VisaSystem } from './models/systems/visa-system/VisaSystem.js';
import { EmployeeSystem } from './models/systems/employee-system/EmployeeSystem.js';
import testRoute from './routes/visa-application-route.js';

// load Visa System and export for use throughout application
export let vs: VisaSystem;
export let es: EmployeeSystem;

try {
  vs = initializeVisaSystem();
  es = initializeEmployeeSystem();
} catch (error) {
  console.error(error);
}

const app = express();

// view engine configuration
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// static files
app.use(express.static(path.join(process.cwd(), 'public')));

// global middleware
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// routes
app.use('/', testRoute);

// server start
app.listen(config.port, () => {
  console.log(
    `[VAS] Application started at http://${getLocalIPAddress()}:${config.port}`
  );
});
