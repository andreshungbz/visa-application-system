// Filename: apply-route.ts
// routes for applying

import express from 'express';
import {
  getApply,
  getApplyB1,
  getApplyB2,
  getApplyF1,
  postB1,
  postB2,
  postF1,
} from '../controllers/apply-controller.js';

const applyRoute = express.Router();

applyRoute.get('/', getApply);
applyRoute.get('/b1', getApplyB1);
applyRoute.get('/b2', getApplyB2);
applyRoute.get('/f1', getApplyF1);

applyRoute.post('/b1', postB1);
applyRoute.post('/b2', postB2);
applyRoute.post('/f1', postF1);

export default applyRoute;
