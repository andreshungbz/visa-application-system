// Filename: visa-applicaiton-route.ts

import express from 'express';
import { test, testAdd } from '../controllers/visa-application-controller.js';

const testRoute = express.Router();

testRoute.get('/', test);
testRoute.get('/add', testAdd);

export default testRoute;
