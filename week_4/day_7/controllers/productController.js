import Product from "../models/Product.js";

const vendorProducts = async (req, res) => {
    try {
        const { userId } = req.params;
        const products = await Product.find({ owner: userId }).populate("owner", "name");
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const { title, price, description, stock, category, owner } = req.body;
        const product = await Product.create({ title, price, description, stock, category, owner });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default { vendorProducts, createProduct };
