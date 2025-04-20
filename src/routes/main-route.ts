// Filename: main-route.ts
// primary navigation routes

import express from 'express';

import { getIndex, getStatus } from '../controllers/main-controller.js';

const mainRoute = express.Router();

mainRoute.get('/', getIndex);
mainRoute.get('/status', getStatus);

export default mainRoute;
