import { Request, Response } from "express";
import { CategorySchema } from "../model/model";
import { CategoryPersistence } from "./repository/dto";
import { v7 } from "uuid";
import { CategoryCreateSchema } from "../model/dto";

export const createCategoryApi = async (req: Request, res: Response) => {

    const { success, data, error } = CategoryCreateSchema.safeParse(req.body);
    if (!success) {
        res.status(400).send({
            error: error.message
        })
        return;
    }

    const newId = v7();
    await CategoryPersistence.create({
        ...data,
        id: newId
    })

    res.status(201).send({
        data: newId
    })
}