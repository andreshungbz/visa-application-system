// Filename: apply-route.ts
// routes for applying

import express from 'express';
import { getApply, getApplyB1 } from '../controllers/apply-controller.js';

const applyRoute = express.Router();

applyRoute.get('/', getApply);
applyRoute.get('/b1', getApplyB1);

export default applyRoute;
