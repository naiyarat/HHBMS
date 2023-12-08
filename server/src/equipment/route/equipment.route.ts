import { EquipmentController } from "../controller/equipment.controller";
import { EquipmentDBImpl } from "../service/equipment.db.impl";
import { Router } from "express";

const newEquipmentController = new EquipmentController(new EquipmentDBImpl());

const router: Router = Router();

router.route('/getBySerialNumber/:serialNumber').get(newEquipmentController.getEquipmentBySerialNumber)
router.route('/getAll').get(newEquipmentController.getAllEquipment)

export default router;