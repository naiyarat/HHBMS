import { Router } from "express";
import ProblemRoute from '../problem/route/problem.route';
import SpecialistRoute from '../specialist/route/specialist.route';
import CallRoute from '../call/route/call.route';
import EmployeeRoute from '../employee/route/employee.route';
import EquipmentRoute from '../equipment/route/equipment.route';
import SubcategoryRoute from '../subcategory/route/subcategory.route';
import CategoryRoute from '../category/route/category.route';

const router: Router = Router();

router.use('/problem', ProblemRoute);
router.use('/specialist', SpecialistRoute);
router.use('/call', CallRoute);
router.use('/employee', EmployeeRoute);
router.use('/equipment', EquipmentRoute);
router.use('/subcategory', SubcategoryRoute);
router.use('/category', CategoryRoute);

export default router;