import { Router } from "express"
import { createCategoryApi } from "./infras/create-api"
import { listCategoryApi } from "./infras/list-api"
import { updateCategoryApi } from "./infras/update-api"
import { deleteCategoryApi } from "./infras/delete-api"
import { getCategoryApi } from "./infras/get-api"
import { init } from "./infras/repository/dto"
import { Sequelize } from "sequelize"
const setUpCategoryModule = (sequelize: Sequelize) => {
    console.log('Setting up category module');
    init(sequelize)

    const router = Router()
    console.log('Registering category routes');
    router.post("/categories", createCategoryApi)
    router.get("/categories", listCategoryApi)
    router.get("/categories/:id", getCategoryApi)
    router.put("/categories/:id", updateCategoryApi)
    router.delete("/categories/:id", deleteCategoryApi)
    return router
}

export default setUpCategoryModule
