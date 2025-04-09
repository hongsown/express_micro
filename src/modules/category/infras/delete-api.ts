import { Request, Response } from "express"

export const deleteCategoryApi = (req: Request, res: Response) => {
    res.status(200).send({
        data: []
    })
}