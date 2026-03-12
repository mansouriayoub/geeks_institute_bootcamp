import express from "express";
import { addMenuItem, deleteMenuItem, getMenu, getMenuItem, updateMenuItem } from "../controllers/menuController";

const router = express.Router();

router.get('/menu', getMenu)
router.get('/menu/:id', getMenuItem)
router.get('/menu/', addMenuItem)
router.get('/menu/', updateMenuItem)
router.get('/menu/', deleteMenuItem)

export default router