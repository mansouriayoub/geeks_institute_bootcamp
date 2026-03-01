// const mongoose = require('mongoose');
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/bootcampDB')
    .then(() => console.log('✅ Connection Successful! Node.js is talking to MongoDB.'))
    .catch(err => console.error('❌ Connection Failed:', err));

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must provide a task title"]
    },
    description: String,
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('Task', taskSchema);

const createTask = async () => {
    try {
        const newTask = await Task.create({
            title: "Learn Mongoose Validation",
            description: "Complete the daily challenge for the MongoDB bootcamp"
        });
        console.log("✅ Task Created:", newTask);
        return newTask;
    } catch (err) {
        console.error("❌ Error:", err.message);
    }
};

const getAllTasks = async () => {
        const tasks = await Task.find();
    console.log("📋 Current Tasks:", tasks);
};

const completeTask = async (taskId) => {
    await Task.findByIdAndUpdate(taskId, { status: 'completed' });
    console.log("🚀 Task marked as completed!");
};


const runApp = async () => {
    try {
        const newTask = await createTask()
        await getAllTasks()
        await completeTask(newTask._id)
    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}
runApp();

