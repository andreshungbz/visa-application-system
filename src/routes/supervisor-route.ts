// Filename: supervisor-route.ts
// routes for system supervisor role

import express from 'express';
import { getSupervisorDashboard } from '../controllers/supervisor-controller.js';

const supervisorRoute = express.Router();

supervisorRoute.get('/dashboard', getSupervisorDashboard);

export default supervisorRoute;
