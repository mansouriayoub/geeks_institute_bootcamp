import { getAllItems, getItemByName, createItem, updateItem,deleteItem } from "../models/menuModel.js";

const getMenu = async (_req,res)=>{
    try {
        
        const result = await getAllItems()
        
        res.status(200).json({message:"Items fetched successfully", result})
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal server error"})
    }
}

const getMenuItem = async (req,res) => {
    try {
        const {name} = req.params
        const result = await getItemByName(name)

        if (result.length === 0) {
            return res.status(404).json({message:"Item not found"});
        }

        res.status(200).json({message:"Item fetched successfully", result})
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal server error"})
    }
}

const addMenuItem = async (req,res)=>{
    try {

        const { name, price } = req.body;

        (!name && !price) ?? res.status(404).json({message:'name and price must be added', result})

        const result = await createItem(name,price)
        res.status(201).json({message:'Item created successfully', result})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal server error"})
    }
}

const updateMenuItem = async (req,res)=>{
    try {
        const {id} = req.params;
        const { name,price } = req.body;

        (!id || !name || !price) ?? res.status(404).json({message:'all fields must be added', result})

        const result = await updateItem(id, name, price)

        res.status(200).json({message:'Item updated successfully', result})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

const deleteMenuItem = async (req,res)=>{
    try {

        const {id} = req.params;
        const result = await deleteItem(Number(id));

        !id ?? console.log('item not found')

        res.status(200).json({message:'Item deleted successfully', result})
        
    } catch (error) {
        res.status(500).send({message:'Server error.', error});
    }
}

export {getMenu, getMenuItem, addMenuItem, updateMenuItem, deleteMenuItem};