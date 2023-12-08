import { SubcategoryController } from "../controller/subcategory.controller";
import { SubcategoryDBImpl } from "../service/subcategory.db.impl";
import { Router } from "express";

const newSubcategoryController = new SubcategoryController(new SubcategoryDBImpl());

const router: Router = Router();

router.route('/getAll').get(newSubcategoryController.getAllSubcategories)

export default router;