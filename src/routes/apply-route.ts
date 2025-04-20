// Filename: apply-route.ts
// routes for applying

import express from 'express';
import {
  getApply,
  getApplyB1,
  getApplyB2,
  getApplyF1,
} from '../controllers/apply-controller.js';

const applyRoute = express.Router();

applyRoute.get('/', getApply);
applyRoute.get('/b1', getApplyB1);
applyRoute.get('/b2', getApplyB2);
applyRoute.get('/f1', getApplyF1);

export default applyRoute;
