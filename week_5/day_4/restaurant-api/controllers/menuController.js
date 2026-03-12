import { getAllItems, getItemByName, createItem, updateItem, deleteItem } from "../models/menuModel.js";

const getMenu = async (req, res) => {
    try {
        const result = await getAllItems()
        res.status(200).json({ message: 'Items retrieved successfully', data: result.rows })
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving items', error: error })
    }
}

const getMenuItem = async (req, res) => {
    const { name } = req.params

    
    try {
        !name ? res.status(400).json({ message: "Item not found" }) : getItemByName(name)
        const result = await getItemByName(name)
        res.status(200).json({ message: 'Item retrieved successfully', data: result.rows })
    } catch (error) {
        res.status(404).json({ message: 'Error retrieving item', error: error })
    }
}

const addMenuItem = async (req, res) => {
    const { name, price } = req.body
    try {
        const result = await createItem(name, price)
        res.status(201).json({ message: "Item added successfully", data: result.rows })
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateMenuItem = async (req, res) => {
    const id = req.params.id
    const { name, price } = req.body
    try {
        const result = await updateItem(id, name, price)
        res.status(200).json({ message: "Item updated successfully", data: result.rows })
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteMenuItem = async (req, res) => {
    const id = req.params.id
    try {
        const result = await deleteItem(id)
        res.status(200).json({ message: "Item deleted successfully", data: result.rows })
    } catch (error) {
        res.status(500).json(error)
    }
}

export {
    getMenu,
    getMenuItem,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
}