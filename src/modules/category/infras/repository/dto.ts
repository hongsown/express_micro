import { Model, DataTypes, Sequelize } from "sequelize";

export class CategoryPersistence extends Model {
    declare id: string
}

export const modelName = "Category"

export function init(sequelize: Sequelize) {
    CategoryPersistence.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        parentId: {
            type: DataTypes.STRING,
            field: "parent_id",
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM("active", "inactive", "deleted"),
            allowNull: false,
            defaultValue: "active",
        },

    }, {
        sequelize,
        modelName: modelName,
        timestamps: true,
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "categories",
    })
}