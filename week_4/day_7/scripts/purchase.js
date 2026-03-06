import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

dotenv.config();

/**
 * NexusMarket Graduation Script: Full Purchase Flow
 * 1. Connects to DB
 * 2. Creates a Vendor and a Buyer
 * 3. Creates a Product owned by the Vendor
 * 4. Places an Order for the Buyer
 * 5. Verifies stock decrement and snapshot logic
 */
const runPurchaseFlow = async () => {
    try {
        await connectDB();
        console.log('--- Starting Purchase Flow ---\n');

        // 1. Cleanup old data (optional for demo)
        await User.deleteMany({});
        await Product.deleteMany({});
        await Order.deleteMany({});

        // 2. Create Users
        const vendor = await User.create({
            name: 'John Vendor',
            email: 'vendor@example.com',
            password: 'securepassword123',
            role: 'vendor'
        });
        console.log(`Vendor created: ${vendor.name} (${vendor.role})`);

        const buyer = await User.create({
            name: 'Jane Buyer',
            email: 'buyer@example.com',
            password: 'securepassword456',
            role: 'user'
        });
        console.log(`Buyer created: ${buyer.name}\n`);

        // 3. Create Product
        const product = await Product.create({
            title: 'Nexus Smartphone Pro',
            description: 'The latest tech in your pocket.',
            price: 999.99,
            stock: 10,
            category: 'Electronics',
            owner: vendor._id
        });
        console.log(`Product created: ${product.title} | Price: $${product.price} | Stock: ${product.stock}\n`);

        // 4. Place an Order
        console.log('--- Placing Order ---');
        const quantityToBuy = 2;

        // Snapshot logic inside the script for demonstration
        const snapshotItems = [{
            productId: product._id,
            title: product.title,
            priceAtPurchase: product.price,
            quantity: quantityToBuy
        }];

        const order = await Order.create({
            buyer: buyer._id,
            items: snapshotItems,
            totalAmount: product.price * quantityToBuy
        });

        // 5. Update Stock using $inc
        await Product.findByIdAndUpdate(product._id, {
            $inc: { stock: -quantityToBuy }
        });

        console.log(`Order placed successfully! ID: ${order._id}`);
        console.log(`Total Amount: $${order.totalAmount}\n`);

        // 6. Verification
        const updatedProduct = await Product.findById(product._id);
        console.log('--- Post-Purchase Verification ---');
        console.log(`Original Stock: ${product.stock}`);
        console.log(`New Stock: ${updatedProduct.stock}`);

        if (updatedProduct.stock === product.stock - quantityToBuy) {
            console.log('✅ Stock successfully decremented.');
        } else {
            console.log('❌ Stock decrement failed.');
        }

        const populatedOrder = await Order.findById(order._id).populate('buyer', 'name email');
        console.log(`Order Buyer (Populated): ${populatedOrder.buyer.name} <${populatedOrder.buyer.email}>`);
        console.log(`Snapshot Price: $${populatedOrder.items[0].priceAtPurchase}`);

        console.log('\n--- Purchase Flow Completed Successfully ---');
        process.exit(0);
    } catch (error) {
        console.error('Test Failed:', error.message);
        process.exit(1);
    }
};

runPurchaseFlow();
