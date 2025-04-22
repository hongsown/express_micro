import { Request, Response } from "express"
import { CategoryPersistence } from "./repository/dto"

export const getCategoryApi = async (req: Request, res: Response) => {
    const { id } = req.params
    const category = await CategoryPersistence.findByPk(id)
    if (!category) {
        res.status(404).send({
            error: "Category not found"
        })
        return;
    }
    res.status(200).send({
        data: category
    })
}