import express from "express";
import { configDotenv } from "dotenv";
import MenuRouter from "./routes/menuRoutes.js";

configDotenv();

const app = express();

app.use(express.json());

app.use("/menu", MenuRouter);

const PORT = process.env.HOST_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});