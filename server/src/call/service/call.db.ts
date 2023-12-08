import { Query } from "mysql2";
import { CreateCallRequest } from "../dto/call.dto.mutation";

export interface CallDB {
    getAllCalls(): Promise<Query | Error>;
    create(req: CreateCallRequest): Promise<number | Error>;
}