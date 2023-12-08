import { Request, Response } from 'express';
import { SpecialistDB } from '../service/specialist.db';

export class SpecialistController {
    private specialistService: SpecialistDB;
    constructor(specialistService: SpecialistDB) {
        this.specialistService = specialistService
    }

    getAllSpecialists = async (_: Request, response: Response) => {
        const res = await this.specialistService.getAllSpecialists();
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
}