import { CreateCallWithProblemRequest } from "../dto/call.dto.mutation";

export interface CallCreationUsecase {
    createCallWithProblem(req: CreateCallWithProblemRequest): Promise<number | Error>;
}