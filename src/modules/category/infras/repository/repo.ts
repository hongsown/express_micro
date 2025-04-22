import { Sequelize } from "sequelize";
import { PagingDto } from "../../../../share/model/paging";
import { IRepository } from "../../interface";
import { CategoryCondDTO } from "../../model/dto";
import { Category } from "../../model/model";

export class MySQLCategoryRepository implements IRepository {
    constructor(
        private readonly sequelize: Sequelize,
        private readonly modelName: string
    ) { }
    get(id: string): Promise<Category | null> {
        throw new Error("Method not implemented.");
    }
    list(cond: CategoryCondDTO, paging: PagingDto): Promise<Array<Category>> {
        throw new Error("Method not implemented.");
    }
    async insert(data: Category): Promise<boolean> {
        await this.sequelize.models[this.modelName].create(data)
        return true;
    }
    update(id: string, data: Category): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


}