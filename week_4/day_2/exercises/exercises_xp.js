// Exercise 1: The "Profile" Design (Embedding)
use PersonalData //db name

db.users.insertOne({
    name: "Yasmine",
    email: "yasmine@tech.ma",
    address: {
        city: "Casablanca",
        country: "Morocco",
        postalCode: "20000"
    }
})

db.users.find()
/*{
    _id: ObjectId('69a41c5d7b38ad1a4d8563b1'),
    name: 'Yasmine',
    email: 'yasmine@tech.ma',
    address: {
    city: 'Casablanca',
        country: 'Morocco',
        postalCode: '20000'
    }
}*/

// Exercise 2: The "Transaction" Design (Referencing)
db.orders.insertOne({
    orderNumber: "ORD-99X",
    total: 1500,
    currency: "MAD",
    status: "Processing",
    userId: ObjectId("69a41c5d7b38ad1a4d8563b1")
})

db.orders.find()
/*{
    _id: ObjectId('69a41f46e2c140c612589753'),
    orderNumber: 'ORD-99X',
    total: 1500,
    currency: 'MAD',
    status: 'Processing',
    userId: ObjectId('69a41c5d7b38ad1a4d8563b1')
  }*/

