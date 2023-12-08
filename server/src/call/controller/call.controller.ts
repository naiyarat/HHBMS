import { Request, Response } from 'express';
import { CallDB } from '../service/call.db';
import { CallCreationUsecase } from '../service/call.usecase.creation';

export class CallController {
    private callService: CallDB;
    private callCreationUsecase: CallCreationUsecase;
    constructor (callDB: CallDB, callCreationUsecase: CallCreationUsecase) {
        this.callService = callDB;
        this.callCreationUsecase = callCreationUsecase;
    }

    getAllCalls = async (_: Request, response: Response) => {
        const res = await this.callService.getAllCalls();
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
    createWithProblem = async (request: Request, response: Response) => {
        const res = await this.callCreationUsecase.createCallWithProblem(request.body);
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
}