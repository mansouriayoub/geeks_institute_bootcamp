// Option 1: The Todo Manager (Complexity: 🟢 Easy)
db.todos.insertOne({
    title: "Finish MongoDB lab",
    completed: false,
    category: "Work",
    createdAt: new Date(),
    userId: ObjectId("69a423b6e32cf096b8ce6c03")
})

db.todos.find({ userId: ObjectId("69a423b6e32cf096b8ce6c03") })
/*{
  _id: ObjectId('69a42b8fe32cf096b8ce6c0b'),
  title: 'Finish MongoDB lab',
  completed: false,
  category: 'Work',
  createdAt: 2026-03-01T12:05:35.400Z,
  userId: ObjectId('69a423b6e32cf096b8ce6c03')
}*/


db.todos.updateOne(
    { _id: ObjectId("69a42b8fe32cf096b8ce6c0b") },
    { $set: { completed: true } }
)
db.todos.deleteOne({ _id: ObjectId("69a42b8fe32cf096b8ce6c0b") })


// Pro-Challenge:
db.todos.createIndex({ userId: 1, category: 1 })

db.todos.insertMany([
    {
        title: "Buy groceries",
        completed: false,
        category: "Personal",
        createdAt: new Date(),
        userId: ObjectId("69a423b6e32cf096b8ce6c03")
    },
    {
        title: "Prepare project report",
        completed: false,
        category: "Work",
        createdAt: new Date(),
        userId: ObjectId("69a423b6e32cf096b8ce6c03")
    }
])

db.todos.find({ category: "Work" }).explain("executionStats")

db.todos.find()

/*  {
    _id: ObjectId('69a42b8fe32cf096b8ce6c0b'),
    title: 'Finish MongoDB lab',
    completed: true,
    category: 'Work',
    createdAt: 2026-03-01T12:05:35.400Z,
    userId: ObjectId('69a423b6e32cf096b8ce6c03')
  }
  {
    _id: ObjectId('69a42bb2e32cf096b8ce6c0c'),
    title: 'Study indexing',
    completed: false,
    category: 'Study',
    createdAt: 2026-03-01T12:06:10.613Z,
    userId: ObjectId('69a423b6e32cf096b8ce6c03')
  }
  {
    _id: ObjectId('69a42ce7e32cf096b8ce6c0d'),
    title: 'Buy groceries',
    completed: false,
    category: 'Personal',
    createdAt: 2026-03-01T12:11:19.573Z,
    userId: ObjectId('69a42b8fe32cf096b8ce6c0b')
  }

  _id: ObjectId('69a42ce7e32cf096b8ce6c0e'),
  title: 'Prepare project report',
  completed: false,
  category: 'Work',
  createdAt: 2026-03-01T12:11:19.573Z,
  userId: ObjectId('69a42b8fe32cf096b8ce6c0b')
}*/