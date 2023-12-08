import { Query, ResultSetHeader } from "mysql2";
import { SubcategoryDB } from "./subcategory.db";
import { executeQuery } from "../../db";
import { CreateSubcatRequest } from "../dto/subcategory.dto.mutation";

export class SubcategoryDBImpl implements SubcategoryDB {
    async create(req: CreateSubcatRequest): Promise<number | Error> {
        const mutation = `
            INSERT INTO subcategory (
                name,
                description,
                category
                )
                VALUES (?, ?, ?)
        `;
        try {
            const results = await new Promise<ResultSetHeader>((resolve, reject) => {
                executeQuery(mutation, function(err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }, [req.name, req.description, req.category]);
            });
            if (!results) {
                throw new Error("Failed to create subcategory. No ID returned.");
            }
            return results.insertId;
        } catch (err) {
            throw new Error(`failed create subcategory. err: ${err}`);
        }
    }
    async getAllSubcategories(): Promise<Error | Query> {
        const query = 'SELECT * FROM subcategory';
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
            throw new Error(`failed to query for subcategory. err: ${err}`);
        }
    }
}
