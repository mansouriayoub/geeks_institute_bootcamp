import express from 'express'
import { fetchPosts } from "./data/dataService.js";

const app = express();

app.use(express.json());

app.get('/api/posts', async (_req,res)=>{
    const result = await fetchPosts()
    res.json(result);
});



const port = 5000;
app.listen(port, ()=>console.log(`Server started at port ${port}`));