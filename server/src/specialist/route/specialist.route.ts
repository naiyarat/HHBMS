import { SpecialistController } from "../controller/specialist.controller";
import { SpecialistDBImpl } from "../service/specialist.db.impl";
import { Router } from "express";

const newSpecialistController = new SpecialistController(new SpecialistDBImpl());

const router: Router = Router();

router.route('/getAll').get(newSpecialistController.getAllSpecialists)

export default router;