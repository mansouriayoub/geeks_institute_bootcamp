import express from "express";
import { getMenu, getMenuItem, addMenuItem, updateMenuItem, deleteMenuItem } from "../controllers/menuController.js";

const router = express.Router()

router.get('/menu', getMenu)
router.get('/menu/:name', getMenuItem)
router.post('/menu', addMenuItem)
router.put('/menu/:id', updateMenuItem)
router.delete('/menu/:id', deleteMenuItem)

export default router;