import { ResultSetHeader } from "mysql2";
import { CategoryDB } from "./category.db";
import { executeQuery } from "../../db";
import { CreateCategoryRequest } from "@src/category/dto/category.dto.mutation";

export class CategoryDBImpl implements CategoryDB {
    async create(req: CreateCategoryRequest): Promise<number | Error> {
        const mutation = `
            INSERT INTO category (
                name,
                description
                )
                VALUES (?, ?)
        `;
        try {
            const results = await new Promise<ResultSetHeader>((resolve, reject) => {
                executeQuery(mutation, function(err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }, [req.category, req.description]);
            });
            if (!results) {
                throw new Error("Failed to create category. No ID returned.");
            }
            return results.insertId;
        } catch (err) {
            throw new Error(`failed create category. err: ${err}`);
        }
    }
}
