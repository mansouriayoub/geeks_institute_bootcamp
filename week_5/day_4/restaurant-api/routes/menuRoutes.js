import express from "express";
import { getMenuItem, getMenu, addMenuItem, updateMenuItem, deleteMenuItem } from "../controllers/menuController";

const router = express.Router();

router.get('/menu', getMenu)
router.get('/menu/:id', getMenuItem)
router.post('/menu/', addMenuItem)
router.put('/menu/:id', updateMenuItem)
router.delete('/menu/:id', deleteMenuItem)

export default router