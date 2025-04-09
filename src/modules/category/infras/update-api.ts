import { Request, Response } from "express"

export const updateCategoryApi = (req: Request, res: Response) => {
    const category = req.body
    res.status(200).send({
        data: category
    })
}