import { Query } from "mysql2";
import { executeQuery } from "../../db";
import { SpecialistDB } from "./specialist.db";
import { Specialist } from "../dto/specialist.query.dto";

export class SpecialistDBImpl implements SpecialistDB {
    async getAllSpecialists(): Promise<Error | Query> {
        const query = `
            SELECT 
                specialist.id,
                employee.name AS name,
                GROUP_CONCAT(DISTINCT CONCAT(problem.topic, ' #', problem.id)) AS problems,
                GROUP_CONCAT(
                    DISTINCT CONCAT(
                        subcategory.name, 
                        '(', 
                        category.name,
                        ")"
                    ) 
                    SEPARATOR ','
                ) AS subcategories
            FROM specialist
            INNER JOIN employee ON employee.id = specialist.employee
            LEFT JOIN specialistxsubcategory ON specialist.id = specialistxsubcategory.specialistId
            LEFT JOIN subcategory ON specialistxsubcategory.subcategoryId = subcategory.id
            LEFT JOIN problem ON specialist.id = problem.specialist
            LEFT JOIN category ON subcategory.category = category.id
            GROUP BY specialist.id, specialist.employee, employee.id, employee.name;
        `;

        try {
            const res = await new Promise<Query>((resolve, reject) => {
                executeQuery(query, function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        const processedRes = res.map((result: Specialist) => ({
                            id: result.id,
                            name: result.name,
                            problems: splitString(result.problems),
                            subcategories: splitString(result.subcategories),
                        }));
                        resolve(processedRes);
                    }
                });
            });
            return res;
        } catch (err) {
            throw new Error(`failed to query for specialist. err: ${err}`);
        }
    }
}

function splitString(str: string): string[] {
    if (str) {
        return str.split(',').map(category => category.trim());
    } else {
        return [];
    }
}