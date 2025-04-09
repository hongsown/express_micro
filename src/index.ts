import express, { Request, Response } from "express";
import dotenv from "dotenv";
import setUpCategoryModule from "./modules/category";
import sequelize from "./share/components/sequelize";

dotenv.config();

sequelize.authenticate().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("Database connection failed", err);
})

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/v1', setUpCategoryModule(sequelize))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
