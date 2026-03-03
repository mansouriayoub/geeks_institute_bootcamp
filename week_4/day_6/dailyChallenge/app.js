const mongoose = require("mongoose");

// connect to mongodb
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/BlogPlatformPro");
        console.log("Connected to MongoDB...");
    } catch (err) {
        console.error("Connection error:", err);
    }
}

const main = async () => {
    await connectDB();
}

main();

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
})

const User = mongoose.model('User', userSchema)

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        text: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: { type: Date, default: Date.now }
    }]
})

const Post = mongoose.model('Post', postSchema)

const seedData = async () => {
    const lina = await User.create({ username: 'LinaDev', email: 'lina@test.com' });
    const adam = await User.create({ username: 'AdamCode', email: 'adam@test.com' });

    await Post.create({
        title: "MongoDB Relationships",
        content: "Today we learned about population...",
        author: lina._id, // Reference to Lina
        comments: [
            { text: "Great post!", author: adam._id } // Comment by Adam
        ]
    });
};


const getFullBlogFeed = async () => {
    const feed = await Post.find()
        .populate('author', 'username') // Populates the Post author
        .populate('comments.author', 'username'); // Deep populates the Comment authors

    console.log(JSON.stringify(feed, null, 2));
}

seedData();
getFullBlogFeed();
