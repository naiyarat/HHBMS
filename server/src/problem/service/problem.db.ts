import { Query } from "mysql2";

export interface ProblemDB {
    getAllProblems(): Promise<Query | Error>;
}