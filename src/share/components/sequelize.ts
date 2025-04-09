import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: parseInt(process.env.DB_PORT || '3306'),
    logging: false,
    pool: {
        max: 20,
        min: 2,
        acquire: 30000,
        idle: 60000
    }
})

export default sequelize