import { CreateCategoryWithSubcatRequest } from "../dto/category.dto.mutation";

export interface CategoryCreationUsecase {
    createCategoryWithSubcat(req: CreateCategoryWithSubcatRequest): Promise<number | Error>;
}