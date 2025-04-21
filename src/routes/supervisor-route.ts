// Filename: supervisor-route.ts
// routes for system supervisor role

import express from 'express';
import {
  getList,
  getSupervisorDashboard,
} from '../controllers/supervisor-controller.js';

const supervisorRoute = express.Router();

supervisorRoute.get('/dashboard', getSupervisorDashboard);
supervisorRoute.get('/list', getList);

export default supervisorRoute;
