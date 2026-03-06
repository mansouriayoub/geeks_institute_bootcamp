import Order from "../models/Order.js";
import Product from "../models/Product.js";

const createOrder = async (req, res) => {
    try {
        const { buyerId, items } = req.body;

        if (!buyerId || !items || items.length === 0) {
            return res.status(400).json({ error: "Buyer ID and items are required" });
        }

        let totalAmount = 0;
        const snapshotItems = [];

        // Process items and calculate total, also check stock
        for (const item of items) {
            const product = await Product.findById(item.productId);
            if (!product) {
                return res.status(404).json({ error: `Product ${item.productId} not found` });
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({ error: `Not enough stock for ${product.title}` });
            }

            totalAmount += product.price * item.quantity;
            snapshotItems.push({
                productId: product._id,
                title: product.title,
                priceAtPurchase: product.price,
                quantity: item.quantity
            });

            // Decrement stock
            await Product.findByIdAndUpdate(product._id, {
                $inc: { stock: -item.quantity }
            });
        }

        const order = await Order.create({
            buyer: buyerId,
            items: snapshotItems,
            totalAmount
        });

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default { createOrder };
