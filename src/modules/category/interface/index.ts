import { PagingDto } from "../../../share/model/paging";
import { CategoryCondDTO, CategoryCreateDto } from "../model/dto";
import { Category } from "../model/model";

export interface ICategoryUseCase {
    createANewCategory(data: CategoryCreateDto): Promise<string>;
}

export interface IRepository extends IQueryRepository, ICommandRepository {

}

export interface IQueryRepository {
    get(id: string): Promise<Category | null>;
    list(cond: CategoryCondDTO, paging: PagingDto): Promise<Array<Category>>;
}

export interface ICommandRepository {
    insert(data: Category): Promise<boolean>;
    update(id: string, data: Category): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}