import { getAllItems, getItemByName, createItem, updateItem, deleteItem } from "../models/menuModel.js";

const getMenu = async (_req, res) => {
    try {

        const result = await getAllItems()

        res.status(200).json({ message: "Items fetched successfully", result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" })
    }
}

const getMenuItem = async (req, res) => {
    try {
        const { name } = req.params

        if (!name) return res.status(400).json({ message: "Item name is required" });

        const result = await getItemByName(name.toLowerCase().trim())

        if (!result) return res.status(404).json({ message: "Item not found" });

        res.status(200).json({ message: "Item fetched successfully", result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" })
    }
}

const addMenuItem = async (req, res) => {
    try {

        const { name, price } = req.body;

        if (!name || !price) {
            return res.status(400).json({ message: 'name and price must be added' })
        }

        const result = await createItem(name, price)

        res.status(201).json({ message: 'Item created successfully', result })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;

        const parsedId = parseInt(id) //convert id to number

        if (
            !id // check Missing or empty id
            || isNaN(parsedId) // check Letters or symbols like abc, @#$
            || parsedId <= 0 // check Zero or negative numbers like 0, -5
            || !Number.isInteger(parsedId) // check Decimals like 1.5, 2.7
        ) {
            return res.status(400).json({ message: 'Invalid id format' });
        }

        if (!name || !price) return res.status(400).json({ message: 'all fields must be added' })

        const result = await updateItem(parsedId, name, price)

        res.status(200).json({ message: 'Item updated successfully', result })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

const deleteMenuItem = async (req, res) => {
    try {

        const { id } = req.params;

        const parsedId = parseInt(id)

        if (!id || isNaN(parsedId) || parsedId <= 0 || !Number.isInteger(parsedId)) {
            return res.status(400).json({ message: 'Invalid id format' })
        }

        const result = await deleteItem(parsedId);

        res.status(200).json({ message: 'Item deleted successfully', result })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

export { getMenu, getMenuItem, addMenuItem, updateMenuItem, deleteMenuItem };