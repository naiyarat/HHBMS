import { Query } from "mysql2";
import { ProblemDB } from "./problem.db";
import { executeQuery } from "../../db";

export class ProblemDBImpl implements ProblemDB {
    async getAllProblems(): Promise<Error | Query> {
        const query = "SELECT * FROM problem"
        try {
            const res = await executeQuery(query)
            return res
        } catch(err) {
            throw new Error(`failed to query for problem. err: ${err}`);
        } 
    }
}