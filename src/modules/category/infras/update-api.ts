import { Request, Response } from "express"
import { CategoryUpdateSchema } from "../model/dto"
import { CategoryPersistence } from "./repository/dto"
import { ModelStatus } from "../../../share/model/base-model"

export const updateCategoryApi = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { success, data, error, } = CategoryUpdateSchema.safeParse(req.body)
        if (!success) {
            res.status(400).send({
                error: error.message
            })
            return;
        }

        const category = await CategoryPersistence.findByPk(id)
        if (!category) {
            res.status(404).send({
                error: "Category not found"
            })
            return;
        }

        if (category.status === ModelStatus.INACTIVE) {
            res.status(400).send({
                error: "Category is inactive"
            })
            return;
        }

        await CategoryPersistence.update(data, {
            where: {
                id: id
            }
        })
        res.status(200).send({
            message: "Category updated successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error: "Internal server error"
        })
    }
}