import { Query, ResultSetHeader } from "mysql2";
import { CallDB } from "./call.db";
import { executeQuery } from "../../db";
import { CreateCallRequest } from "../dto/call.dto.mutation";

export class CallDBImpl implements CallDB {
    async create(req: CreateCallRequest): Promise<number | Error> {
        const mutation = `
            INSERT INTO calls (
                caller,
                operator,
                timeOfCall,
                problem,
                description
                )
                VALUES (?, ?, ?, ?, ?)
        `;
        try {
            const results = await new Promise<ResultSetHeader>((resolve, reject) => {
                executeQuery(mutation, function(err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }, [req.caller, req.operator, req.timeOfCall, req.problem, req.description]);
            });
            if (!results) {
                throw new Error("Failed to create call. No ID returned.");
            }
            return results.insertId;
        } catch (err) {
            throw new Error(`failed create call. err: ${err}`);
        }
    }
    async getAllCalls(): Promise<Error | Query> {
        const query = `
            SELECT 
                calls.id,
                callerEmployee.name AS caller,
                operatorEmployee.name AS operator,
                calls.timeOfCall,
                calls.description,
                calls.problem as problemId
            FROM calls
            LEFT JOIN employee AS callerEmployee ON calls.caller = callerEmployee.id
            LEFT JOIN employee AS operatorEmployee ON calls.operator = operatorEmployee.id
        `;
        try {
            const results = await new Promise<Query>((resolve, reject) => {
                executeQuery(query, function(err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });
            return results;
        } catch (err) {
            throw new Error(`failed to query for call. err: ${err}`);
        }
    }
}
