import express from "express";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

export default app;