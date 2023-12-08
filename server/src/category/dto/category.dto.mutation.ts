import { CreateSubcatRequest } from "../../subcategory/dto/subcategory.dto.mutation";

export type CreateCategoryRequest = {
    category: string;
    description?: string;
}
export type CreateCategoryWithSubcatRequest = CreateCategoryRequest &
    { subcategory: Omit<CreateSubcatRequest, 'category'>[] }