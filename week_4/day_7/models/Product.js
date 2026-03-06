import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: String,
    stock: { type: Number, default: 0 },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: { type: String, required: true }
}, { timestamps: true })

// High-speed search for products within a category sorted by price
productSchema.index({ category: 1, price: -1 });

const Product = mongoose.model('Product', productSchema);
export default Product;