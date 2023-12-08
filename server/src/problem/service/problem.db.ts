import { Query } from "mysql2";
import { CreateProblemRequest, AddSolution, EditSubcategory } from "../dto/problem.dto.mutation";

export interface ProblemDB {
    getAllProblems(): Promise<Query | Error>;
    addSolution(req: AddSolution): Promise<null | Error>;
    editSubcategory(req: EditSubcategory): Promise<null | Error>;
    create(req: CreateProblemRequest): Promise<number | Error>;
};