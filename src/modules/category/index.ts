import { Router } from "express"
import { createCategoryApi } from "./infras/create-api"
import { listCategoryApi } from "./infras/list-api"
import { updateCategoryApi } from "./infras/update-api"
import { deleteCategoryApi } from "./infras/delete-api"
import { getCategoryApi } from "./infras/get-api"
import { init, modelName } from "./infras/repository/dto"
import { Sequelize } from "sequelize"
import { CategoryHttpService } from "./infras/transport/http-service"
import { CategoryUseCase } from "./usecase"
import { MySQLCategoryRepository } from "./infras/repository/repo"
export const setUpCategoryModule = (sequelize: Sequelize) => {
    console.log('Setting up category module');
    init(sequelize)

    const router = Router()
    console.log('Registering category routes');
    router.post("/categories", createCategoryApi)
    router.get("/categories", listCategoryApi)
    router.get("/categories/:id", getCategoryApi)
    router.patch("/categories/:id", updateCategoryApi)
    router.delete("/categories/:id", deleteCategoryApi)
    return router
}


export const setUpCategoryHexagon = (sequelize: Sequelize) => {
    console.log('Setting up category module');
    init(sequelize)

    const repository = new MySQLCategoryRepository(sequelize, modelName)
    const useCase = new CategoryUseCase(repository)
    const httpService = new CategoryHttpService(useCase)

    const router = Router()
    console.log('Registering category routes');
    router.post("/categories", httpService.createANewCategory.bind(httpService))
    router.get("/categories", listCategoryApi)
    router.get("/categories/:id", getCategoryApi)
    router.patch("/categories/:id", updateCategoryApi)
    router.delete("/categories/:id", deleteCategoryApi)
    return router
}

