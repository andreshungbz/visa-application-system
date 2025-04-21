// Filename: reviewer-route.ts
// routes for reviewer role

import express from 'express';
import {
  getProcess,
  getQueue,
  getReviewerDashboard,
} from '../controllers/reviewer-controller.js';

const reviewerRoute = express.Router();

reviewerRoute.get('/dashboard', getReviewerDashboard);
reviewerRoute.get('/queue', getQueue);
reviewerRoute.get('/process/:id', getProcess);

export default reviewerRoute;
