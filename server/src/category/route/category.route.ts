import { CategoryController } from "../controller/category.controller";
import { Router } from "express";
import { CategoryDBImpl } from "../service/category.db.impl";
// import { CallCreationUsecaseImpl } from "@src/call/service/call.usecase.creation.impl";
import { CategoryCreationUsecaseImpl } from "../service/category.usecase.creation.impl";
import { SubcategoryDBImpl } from "../../subcategory/service/subcategory.db.impl";

const newCategoryController = new CategoryController(
        new CategoryCreationUsecaseImpl(
            new CategoryDBImpl(),
            new SubcategoryDBImpl(),
        )
    );

const router: Router = Router();

router.route('/createWithSubcat').post(newCategoryController.createWithSubcat)

export default router;