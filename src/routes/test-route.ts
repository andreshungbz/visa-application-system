import express from 'express';
import {
  test,
  testAdd,
  testAddEmployee,
  testGetApplication,
  testGetStatus,
} from '../controllers/test-controller.js';

const testRoute = express.Router();

testRoute.get('/', test);
testRoute.get('/add', testAdd);
testRoute.get('/application/:id/status', testGetStatus);
testRoute.get('/application/:id', testGetApplication);
testRoute.get('/add-employee', testAddEmployee);

export default testRoute;
