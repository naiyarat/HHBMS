import { Query } from "mysql2";
import { CreateSubcatRequest } from "../dto/subcategory.dto.mutation";

export interface SubcategoryDB {
    getAllSubcategories(): Promise<Query | Error>;
    create(req: CreateSubcatRequest): Promise<number | Error>;
}