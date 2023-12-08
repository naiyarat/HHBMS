import { startTransaction } from "../../db";
import { CallCreationUsecase } from "./call.usecase.creation";
import { CallDB } from "./call.db";
import { CreateCallWithProblemRequest } from "../dto/call.dto.mutation";
import { ProblemDB } from "@src/problem/service/problem.db";

export class CallCreationUsecaseImpl implements CallCreationUsecase {
    private callService: CallDB;
    private problemService: ProblemDB;
    constructor (callDB: CallDB, problemDB: ProblemDB) {
        this.callService = callDB;
        this.problemService = problemDB;
    }
    async createCallWithProblem(req: CreateCallWithProblemRequest): Promise<Error | number> {
        let problemPk: number = 0;
        let callPk: number = 0;
        console.log(req)
        await startTransaction(async () => {
            if (!('id' in req.problem)) {
                const problemRes = req.problem && await this.problemService.create({
                    topic: req.problem.topic,
                    description: req.problem.description,
                    subcategory: req.problem.subcategory,
                    equipmentSerialNo: req.problem.equipmentSerialNo,
                    resolutionTime: req.problem.resolutionTime,
                    solution: req.problem.solution,
                    specialist: req.problem.specialist
                })
                if (problemRes instanceof Error) throw problemRes;
                problemPk = problemRes;
            } else {
                problemPk = req.problem.id;
            }

            const callRes = await this.callService.create({
                caller: req.caller,
                operator: req.operator,
                timeOfCall: req.timeOfCall,
                problem: problemPk,
                description: req.description,
            })
            if (callRes instanceof Error) throw callRes;
            callPk = callRes;
        }).catch((err: Error) => {
            return err
        })
        return callPk;
    }
}