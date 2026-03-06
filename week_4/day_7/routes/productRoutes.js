import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/vendor/:userId", productController.vendorProducts);
router.post("/", productController.createProduct);

export default router;
