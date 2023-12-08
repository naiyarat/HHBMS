import { EmployeeController } from "../controller/employee.controller";
import { EmployeeDBImpl } from "../service/employee.db.impl";
import { Router } from "express";

const newEmployeeController = new EmployeeController(new EmployeeDBImpl());

const router: Router = Router();

router.route('/getAll').get(newEmployeeController.getAllCalls)
router.route('/getByName/:name').get(newEmployeeController.getEmployeesByName)

export default router;