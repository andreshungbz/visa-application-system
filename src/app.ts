// Filename: app.ts
// main gateway to Express server

import express from 'express';
import path from 'node:path';

import { config } from './config/app.config';
import { logger } from './middleware/logger';
import { getLocalIPAddress } from './utils/getLocalIPAddress';

import {
  initializeVisaSystem,
  initializeEmployeeSystem,
} from './utils/initialize';

// load Visa System and export for use throughout application
export const vs = initializeVisaSystem();
export const es = initializeEmployeeSystem();

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
app.get('/', (_req, res) => {
  res.send(`Visa Application System`);
});

// server start
app.listen(config.port, () => {
  console.log(
    `[VAS] Application started at http://${getLocalIPAddress()}:${config.port}`
  );
});
