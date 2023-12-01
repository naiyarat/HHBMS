import { ProblemDB } from "../service/problem.db";
import { Request, Response } from 'express';

export class ProblemController {
    private problemService: ProblemDB;
    constructor(problemService: ProblemDB) {
        this.problemService = problemService
    }

    getAllProblems = async (_: Request, response: Response) => {
        const res = await this.problemService.getAllProblems();
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
}