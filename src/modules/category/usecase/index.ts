import { v7 } from "uuid";
import { ModelStatus } from "../../../share/model/base-model";
import { ICategoryUseCase, IRepository } from "../interface";
import { CategoryCreateDto } from "../model/dto";
import { Category } from "../model/model";

export class CategoryUseCase implements ICategoryUseCase {
    constructor(
        private readonly categoryRepository: IRepository
    ) { }

    async createANewCategory(data: CategoryCreateDto): Promise<string> {
        const newId = v7();

        const category: Category = {
            id: newId,
            name: data.name,
            position: 0,
            image: data.image || "",
            description: data.description || "",
            status: ModelStatus.ACTIVE,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        await this.categoryRepository.insert(category)

        return newId
    }
}