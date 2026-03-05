import express from "express";
import { vendorProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/vendor/:userId", vendorProducts);

export default router;
