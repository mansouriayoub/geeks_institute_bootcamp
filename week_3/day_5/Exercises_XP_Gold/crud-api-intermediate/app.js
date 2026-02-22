import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.json())

app.get('/api/posts', async (_req, res) => {
    try {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.status(200).json(posts.data)
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({ message: 'posts not found' })
    }
})

app.get('/api/posts/:postID', async (req, res) => {
    const id = Number(req.params.postID);

    try {

        const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        res.status(200).json(post.data)
    } catch (error) {
        return res.status(404).json({ message: 'post not found' })
    }

})

app.post('/api/posts', async (req, res) => {

    const { userId, title, body } = req.body;

    if (!title || !body) {
        return res.status(400).json({ message: 'details required' })
    }

    try {

        const newPost = { userId, title, body }

        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost)
        res.status(201).json(response.data)

    } catch (error) {
        return res.status(500).json({ message: 'Bad request' })
    }
})


app.put('/api/posts/:postID', async (req, res) => {
    const id = Number(req.params.postID);

    const { title, body } = req.body

    if (!title || !body) {
        return res.status(400).json({ message: 'details required' })
    }

    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body })

        res.status(200).json(response.data)

    } catch (error) {
        return res.status(500).json({ message: 'Bad request' })
    }
})

app.delete('/api/posts/:postID', async (req, res) => {
    const id = Number(req.params.postID);
    try {

        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

        res.status(200).json({ message: 'post deleted' })

    } catch (error) {
        return res.status(500).json({ message: 'bad request' })
    }
})

const port = 5000;
app.listen(port, () => console.log(`Server started at ${port}`));