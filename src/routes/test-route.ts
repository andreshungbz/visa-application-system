import express from 'express';
import {
  test,
  testAdd,
  testAddEmployee,
  testApproveStage,
  testGetApplication,
  testGetEmployee,
  testGetStatus,
  testRejectStage,
  testRemoveEmployee,
} from '../controllers/test-controller.js';

const testRoute = express.Router();

testRoute.get('/', test);
testRoute.get('/add', testAdd);
testRoute.get('/application/:id/status', testGetStatus);
testRoute.get('/application/:id', testGetApplication);
testRoute.get('/add-employee', testAddEmployee);
testRoute.get('/approve', testApproveStage);
testRoute.get('/reject', testRejectStage);
testRoute.get('/remove-employee', testRemoveEmployee);
testRoute.get('/employee/:id', testGetEmployee);

export default testRoute;
