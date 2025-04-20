// Filename: reviewer-route.ts
// routes for reviewer role

import express from 'express';
import { getReviewerDashboard } from '../controllers/reviewer-controller.js';

const reviewerRoute = express.Router();

reviewerRoute.get('/dashboard', getReviewerDashboard);

export default reviewerRoute;
