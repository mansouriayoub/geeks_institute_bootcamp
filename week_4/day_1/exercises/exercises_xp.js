db.students.find({ age: { $gte: 18, $lte: 25 } })

db.students.updateOne({ name: "Yassine" }, { $set: { city: "Casablanca" } })

db.students.deleteOne({ name: "Sophia" })

db.students.updateMany({ major: "AI" }, { $set: { major: "Generative AI" } })


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