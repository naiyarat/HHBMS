import { Query } from "mysql2";
import { executeQuery } from "../../db";
import { EmployeeDB } from "./employee.db";

export class EmployeeDBImpl implements EmployeeDB {
    async getEmployeesByName(name: string): Promise<Error | Query> {
        const query = 'SELECT * FROM employee WHERE LOWER(name) LIKE LOWER(?)';
        try {
            const results = await new Promise<Query>((resolve, reject) => {
                executeQuery(query, function(err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }, [name]);
            });
            return results;
        } catch (err) {
            throw new Error(`failed to query for equipment. err: ${err}`);
        }
    }
    async getAllEmployees(): Promise<Error | Query> {
        const query = `SELECT * FROM employee`;
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
            throw new Error(`failed to query for employee. err: ${err}`);
        }
    }
}
