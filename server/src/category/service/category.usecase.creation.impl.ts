import { startTransaction } from "../../db";
import { CategoryCreationUsecase } from "./category.usecase.creation";
import { CategoryDB } from "./category.db";
import { CreateCategoryWithSubcatRequest } from "../dto/category.dto.mutation";
import { SubcategoryDB } from "@src/subcategory/service/subcategory.db";

export class CategoryCreationUsecaseImpl implements CategoryCreationUsecase {
    private categoryService: CategoryDB;
    private subcatService: SubcategoryDB;
    constructor (categoryDB: CategoryDB, subcatDB: SubcategoryDB) {
        this.categoryService = categoryDB;
        this.subcatService = subcatDB;
    }
    async createCategoryWithSubcat(req: CreateCategoryWithSubcatRequest): Promise<Error | number> {
        let categoryPk: number = 0;
        await startTransaction(async () => {
            const { category, description, ...subcategories } = req;
            const categoryRes = await this.categoryService.create({
                category: category,
                description: description,
            })
            if (categoryRes instanceof Error) throw categoryRes;
            categoryPk = categoryRes;

            for (const subcategory of subcategories.subcategory) {
                const subcategoryRes = await this.subcatService.create({
                    name: subcategory.name,
                    description: subcategory.description,
                    category: categoryPk
                })
                if (subcategoryRes instanceof Error) throw categoryRes;
            }
        }).catch((err: Error) => {
            return err
        })
        return categoryPk;
    }
}