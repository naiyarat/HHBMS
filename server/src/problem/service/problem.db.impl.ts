import { Query, ResultSetHeader } from "mysql2";
import { ProblemDB } from "./problem.db";
import { executeQuery } from "../../db";
import { CreateProblemRequest, AddSolution, EditSubcategory } from "../dto/problem.dto.mutation";

export class ProblemDBImpl implements ProblemDB {
  async addSolution(req: AddSolution): Promise<null | Error> {
      const mutation = `UPDATE problem SET solution = ? WHERE id = ?`;
      try {
        const results = await new Promise<Query>((resolve, reject) => {
          executeQuery(mutation, function (err, results) {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          }, [ req.solution, req.id ]);
        });

        if (results instanceof Error) {
          throw new Error();
        }

        return null;
      } catch (err) {
        throw new Error(`Failed to edit problem solution. err: ${err}`);
      }
  }
   async editSubcategory(req: EditSubcategory): Promise<null | Error> {
      const mutation = `UPDATE problem SET subcategory = ? WHERE id = ?`;
      try {
        const results = await new Promise<Query>((resolve, reject) => {
          executeQuery(mutation, function (err, results) {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          }, [ req.subcategory, req.id ]);
        });

        if (results instanceof Error) {
          throw new Error();
        }

        return null;
      } catch (err) {
        throw new Error(`Failed to add problem solution. err: ${err}`);
      }
  }
  async create(req: CreateProblemRequest): Promise<number | Error> {
    const mutation = `
      INSERT INTO problem (
        topic,
        description,
        subcategory,
        equipmentSerialNo,
        resolutionTime,
        solution,
        specialist
      )
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `;


    try {
      const results = await new Promise<ResultSetHeader>((resolve, reject) => {
        executeQuery(mutation, function (err, results) {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }, [
          req.topic,
          req.description,
          req.subcategory,
          req.equipmentSerialNo,
          req.resolutionTime,
          req.solution,
          req.specialist,
        ]);
      });

      if (!results) {
        throw new Error("Failed to create problem. No ID returned.");
      }

      return results.insertId;
    } catch (err) {
      throw new Error(`Failed to create problem. err: ${err}`);
    }
  }

  async getAllProblems(): Promise<Error | Query> {
    const query = `
      SELECT 
        problem.id,
        problem.topic,
        subcategory.name AS subcategory,
        problem.equipmentSerialNo,
        problem.resolutionTime,
        employee.name AS specialist,
        problem.solution AS solution
      FROM problem
      LEFT JOIN specialist ON problem.specialist = specialist.id
      LEFT JOIN employee ON specialist.employee = employee.id
      LEFT JOIN subcategory ON problem.subcategory = subcategory.id
    `;

    try {
      const results = await new Promise<Query>((resolve, reject) => {
        executeQuery(query, function (err, results) {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });

      return results;
    } catch (err) {
      throw new Error(`Failed to query for problem. err: ${err}`);
    }
  }
}
