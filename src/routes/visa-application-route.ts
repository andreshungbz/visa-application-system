// Filename: visa-applicaiton-route.ts

import express from 'express';
import { test } from '../controllers/visa-application-controller.js';

const testRoute = express.Router();

testRoute.get('/', test);

export default testRoute;
