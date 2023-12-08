import { Request, Response } from 'express';
// import { CategoryDB } from '../service/category.db';
import { CategoryCreationUsecase } from '../service/category.usecase.creation';

export class CategoryController {
    // private categoryService: CategoryDB;
    private categoryCreationUsecase: CategoryCreationUsecase;
    constructor(
        // categoryService: CategoryDB,
        categoryCreationUsecase: CategoryCreationUsecase
    ) {
        // this.categoryService = categoryService;
        this.categoryCreationUsecase = categoryCreationUsecase;
    }

    createWithSubcat = async (request: Request, response: Response) => {
        const res = await this.categoryCreationUsecase.createCategoryWithSubcat(request.body);
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
}