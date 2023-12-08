import { Request, Response } from 'express';
import { SubcategoryDB } from '../service/subcategory.db';

export class SubcategoryController {
    private subcategoryService: SubcategoryDB;
    constructor(subcategoryService: SubcategoryDB) {
        this.subcategoryService = subcategoryService
    }

    getAllSubcategories = async (_: Request, response: Response) => {
        const res = await this.subcategoryService.getAllSubcategories();
        if (res instanceof Error) {
            return response.status(500).json({ res });
        }
        return response.status(200).json(res);
    };
}