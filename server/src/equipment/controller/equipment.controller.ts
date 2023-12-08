import { Request, Response } from 'express';
import { EquipmentDB } from '../service/equipment.db';

export class EquipmentController {
    private equipmentService: EquipmentDB;
    constructor(equipmentService: EquipmentDB) {
        this.equipmentService = equipmentService
    }

    getEquipmentBySerialNumber = async (req: Request, response: Response) => {
        const res = await this.equipmentService.getEquipmentBySerialNumber(req.params.serialNumber);
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
    getAllEquipment = async (_: Request, response: Response) => {
        const res = await this.equipmentService.getAllEquipment();
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
}