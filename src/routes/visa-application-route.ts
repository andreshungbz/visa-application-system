// Filename: visa-applicaiton-route.ts

import express from 'express';
import {
  test,
  testAdd,
  testGetApplication,
  testGetStatus,
} from '../controllers/visa-application-controller.js';

const testRoute = express.Router();

testRoute.get('/', test);
testRoute.get('/add', testAdd);
testRoute.get('/application/:id/status', testGetStatus);
testRoute.get('/application/:id', testGetApplication);

export default testRoute;
