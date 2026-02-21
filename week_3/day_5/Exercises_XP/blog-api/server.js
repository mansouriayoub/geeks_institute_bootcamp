const express = require("express");
const posts = require('./data')

const app = express();

app.use(express.json())

app.listen(3033);

app.get('/api/posts', (req,res)=>{
    res.json(posts)
})

app.get('/api/posts/:postID', (req,res)=>{
    const id = Number(req.params.postID);

    const post = posts.find(post=>post.id===id)

    if (!post) {
        res.status(404).json({message:'post not found'})
    }

    res.json(post)
})

app.post('/api/posts', (req,res)=>{

    const { title, content } = req.body

    if (!title || !content) {
        res.status(400).json({message: 'title and content are required'})
    }

    const newPost = {
        id: posts.length +1,
        title,
        content
    }

    posts.push(newPost)
    res.status(201).json(newPost)
})

app.put('/api/posts/:postID', (req,res)=>{
    const id = Number(req.params.postID)

    const { title, content } = req.body

    const index = posts.findIndex(post=>post.id===id)

    if (!title || !content) {
        res.status(400).json({message:'bad request'})
    }else if (index === -1) {
        res.status(404).json({message:'post not found'})
    }else{

        posts[index]= {...posts[index], title,content}
        res.json({message:'post updated'})

    }

})

app.delete('/api/posts/:postID', (req,res)=>{
    const id = Number(req.params.postID)

    const index = posts.findIndex(post=>post.id===id)

    if (index === -1) {
        res.status(404).json({message:'post not found'})
    }else{
        
        posts.splice(index,1)
        
        res.status(200).json({message:'post deleted'})
    }
})