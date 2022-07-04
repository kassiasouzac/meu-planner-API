import { Request, Response } from 'express';
import { DetailCategoryService } from '../../services/category/DetailCategoryService';

class DetailCategoryController{
    async handle(req: Request, res: Response){
        const categoryId = req.query.categoryId as string;

        const detailCategoryService = new DetailCategoryService;

        const category = await detailCategoryService.execute({categoryId});

        return res.json(category);
    }


}

export { DetailCategoryController}