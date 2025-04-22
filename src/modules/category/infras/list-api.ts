import { Request, Response } from "express";
import { PagingDtoSchema } from "../../../share/model/paging";
import { CategoryPersistence } from "./repository/dto";

export const listCategoryApi = async (req: Request, res: Response) => {

    const { success, data } = PagingDtoSchema.safeParse(req.query)
    if (!success) {
        res.status(400).send({
            error: "Invalid paging"
        })
        return;
    }

    const { rows, count } = await CategoryPersistence.findAndCountAll({
        offset: (data.page - 1) * data.limit,
        limit: data.limit
    })

    data.total = count
    res.status(200).send({
        data: rows,
        paging: data
    })
}