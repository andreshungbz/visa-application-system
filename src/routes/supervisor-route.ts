// Filename: supervisor-route.ts
// routes for system supervisor role

import express from 'express';
import {
  getList,
  getReviewers,
  getSupervisorDashboard,
  getView,
  postAddReviewer,
} from '../controllers/supervisor-controller.js';

const supervisorRoute = express.Router();

supervisorRoute.get('/dashboard', getSupervisorDashboard);
supervisorRoute.get('/list', getList);
supervisorRoute.get('/view/:id', getView);

supervisorRoute.get('/reviewers', getReviewers);
supervisorRoute.post('/add-reviewer', postAddReviewer);

export default supervisorRoute;
