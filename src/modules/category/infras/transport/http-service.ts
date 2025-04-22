import { Request, Response } from "express";
import { ICategoryUseCase } from "../../interface";
import { CategoryCreateSchema } from "../../model/dto";


export class CategoryHttpService {
    constructor(
        private readonly useCase: ICategoryUseCase
    ) { }

    async createANewCategory(req: Request, res: Response) {
        const { success, data, error } = CategoryCreateSchema.safeParse(req.body);
        if (!success) {
            res.status(400).send({
                error: error.message
            })
            return;
        }


        const result = await this.useCase.createANewCategory(data)
        res.status(201).json({
            data: result
        })
    }
}