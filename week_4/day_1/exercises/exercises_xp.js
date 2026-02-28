// 🛠 Exercise 1: The Enrollment Phase
use globalTechAcademy

db.students.insertMany([
    { name: "Yassine", age: 19, city: "Rabat", major: "AI" },
    { name: "Sophia", age: 26, city: "Paris", major: "Cybersecurity" },
    { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
    { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
    { name: "Marcus", age: 24, city: "New York", major: "AI" }
])


// 🔍 Exercise 2: Data Intelligence
// Task A
db.students.find({ age: { $gte: 18, $lte: 25 } })

// Task B
db.students.updateOne({ name: "Yassine" }, { $set: { city: "Casablanca" } })

// Task C
db.students.deleteOne({ name: "Sophia" })

// 🏆 Boss Level Challenge (Optional)
db.students.updateMany({ major: "AI" }, { $set: { major: "Generative AI" } })



// current state of db
db.students.find().pretty()

[
    {
        _id: ObjectId('69a2d857a4e3adfdd88563b1'),
        name: 'Yassine',
        age: 19,
        city: 'Rabat',
        major: 'Generative AI'
    },
    {
        _id: ObjectId('69a2d857a4e3adfdd88563b2'),
        name: 'Sophia',
        age: 26,
        city: 'Paris',
        major: 'Cybersecurity'
    },
    {
        _id: ObjectId('69a2d857a4e3adfdd88563b3'),
        name: 'Kaito',
        age: 22,
        city: 'Tokyo',
        major: 'Web Dev'
    },
    {
        _id: ObjectId('69a2d857a4e3adfdd88563b4'),
        name: 'Elena',
        age: 31,
        city: 'Madrid',
        major: 'Data Science'
    },
    {
        _id: ObjectId('69a2d857a4e3adfdd88563b5'),
        name: 'Marcus',
        age: 24,
        city: 'New York',
        major: 'Generative AI'
    }
]