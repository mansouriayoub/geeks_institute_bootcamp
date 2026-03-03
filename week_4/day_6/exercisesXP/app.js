import mongoose from "mongoose";

// connect to mongodb
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test");
        console.log("Connected to MongoDB...");
    } catch (err) {
        console.error("Connection error:", err);
    }
}
/*
Exercise 1: The "Who Wrote What" Challenge (Relationships)
*/

// define user schema
const userSchema = new mongoose.Schema({ name: String })
const User = mongoose.model('User', userSchema)

// // define user schema
const postSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Post = mongoose.model('Post', postSchema)


const run = async () => {

    const admin = await User.create({ name: 'Admin' })
    await Post.create({
        title: 'Post one',
        author: admin._id
    })

    const postWithData = await Post.findOne({ title: 'Post one' }).populate('author')
    console.log(`Post Title: ${postWithData.title}`);
    console.log(`Author Name: ${postWithData.author.name}`);
}


// Exercise 2: The "Self-Updating" Field (Middleware)

const studentSchema = new mongoose.Schema({
    name: String,
    updatedAt: Date
})

studentSchema.pre('save', function () {
    this.updatedAt = new Date();
})

const Student = mongoose.model('Student', studentSchema)

const run2 = async () => {
    const student = await Student.create({ name: 'Eyup' })
    console.log('Student created:', student)
}

const main = async () => {
    await connectDB();
    await run();
    await run2();
}

main();