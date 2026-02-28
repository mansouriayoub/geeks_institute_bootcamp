// 🏗️ Task 1: Inventory Setup

use EcoMart

db.products.insertMany([
    {
        name: "Laptop",
        category: "Electronics",
        stock: 100,
        price: 1000
    },
    {
        name: "Blender",
        category: "Home",
        stock: 3,
        price: 100
    },
    {
        name: "Notebook",
        category: "Stationery",
        stock: 50,
        price: 100
    },
    {
        name: "Smartphone",
        category: "Electronics",
        stock: 20,
        price: 100
    },
    {
        name: "Toaster",
        category: "Home",
        stock: 15,
        price: 100
    }
])

// 📉 Task 2: The "Restock Needed" Alert
db.products.find({ stock: { $lt: 10 } })

// 📈 Task 3: The Inflation Adjustment
db.products.updateMany(
    { category: "Electronics" },
    { $mul: { price: 1.1 } }
)