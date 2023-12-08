import { CreateCategoryRequest } from "../dto/category.dto.mutation";

export interface CategoryDB {
    create(req: CreateCategoryRequest): Promise<number | Error>;
}