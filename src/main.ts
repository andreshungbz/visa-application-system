// Filename: app.ts
// main gateway to Express server

import express from 'express';
import path from 'node:path';

import config from './config/app.config.js';
import logger from './middleware/http-logger.js';

import mainRoute from './routes/main-route.js';

import { VisaSystem } from './models/systems/visa-system/VisaSystem.js';
import { EmployeeSystem } from './models/systems/employee-system/EmployeeSystem.js';

import {
  initializeVisaSystem,
  initializeEmployeeSystem,
} from './utils/initialize.js';
import notFound from './middleware/not-found.js';
import applyRoute from './routes/apply-route.js';
import reviewerRoute from './routes/reviewer.route.js';

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
app.set('views', path.join(process.cwd(), 'src/views'));

// static files
app.use(express.static(path.join(process.cwd(), 'src/public')));

// global middleware
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// routes
app.use('/', mainRoute);
app.use('/apply', applyRoute);
app.use('/reviewer', reviewerRoute);

// handle undefined routes
app.use(notFound);

// server start
app.listen(config.port, () => {
  console.log(`${config.abbreviation} ${config.name} started at ${config.url}`);
});
