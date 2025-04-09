import { Request, Response } from "express"

export const getCategoryApi = (req: Request, res: Response) => {
    const { id } = req.params
    res.status(200).send({
        data: []
    })
}