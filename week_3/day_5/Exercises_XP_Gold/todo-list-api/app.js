import express from 'express';
import dotenv from 'dotenv'
import {v4 as uuidv4} from 'uuid';

dotenv.config();

const app = express()

app.use(express.json())


const todos = [];


app.post('/api/todos', (req,res)=>{
    const { title, completed } = req.body;

    const uid = uuidv4();

    if (!title) {
        return res.status(400).json({message:'title is required'})
    }

    const todo = {
        id: uid,
        title,
        completed: completed ?? false
    }

    todos.push(todo);
    res.status(201).json(todo);

})

app.get('/api/todos', (_req,res)=>{
    res.json(todos);
})

app.get('/api/todos/:todoID', (req,res)=>{
    const id = req.params.todoID

    const todo = todos.find(todo=>todo.id===id)

    if (!todo) {
        return res.status(404).json({message: 'Not found'});
    }
    res.status(200).json(todo)
})

app.put('/api/todos/:todoID', (req,res)=>{
    const id = req.params.todoID

    const { title, completed } = req.body

    const todoIndex = todos.findIndex(todo=>todo.id===id)
    
    if (todoIndex === -1){
        return res.status(404).json({message:'not found'})
    }
    
    if (title !== undefined) {
        todos[todoIndex].title = title
    } 
    
    if (completed !== undefined){
        todos[todoIndex].completed = completed
    }
        res.json(todos[todoIndex])
        // res.status(200).json({message:'todo updated'})

})

app.delete('/api/todos/:todoID', (req,res)=>{
    const id = req.params.todoID

    const todoIndex = todos.findIndex(todo=>todo.id===id)

    if (todoIndex === -1) {
        return res.status(404).json({message:'not found'})
    }
        
        todos.splice(todoIndex, 1);
        // res.status(200).json({message: 'todo deleted'})
        res.status(204).send()

})

const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Server started at ${PORT}`));