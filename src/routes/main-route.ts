// Filename: main-route.ts
// primary navigation routes

import express from 'express';

import {
  getApply,
  getIndex,
  getStatus,
} from '../controllers/main-controller.js';

const mainRoute = express.Router();

mainRoute.get('/', getIndex);
mainRoute.get('/status', getStatus);
mainRoute.get('/apply', getApply);

export default mainRoute;
