import express from 'express';
import dotenv from 'dotenv'
import path from 'path';
import data from './data.js'

dotenv.config();

const app = express();

app.use(express.json())
app.use(express.static('.'))
/*
    Step 2 — The session store and leaderboard
    Two empty objects/arrays. 
    One holds active players and their current state. 
    One holds finished scores. Just declare them for now.
*/
const activePlayers= {}
const finishedScores = []

app.get('/', (_req,res)=>{

    res.sendFile(path.join(__dirname, 'index.html'))
})

/*
    Step 4 — GET /api/question
    This is the most interesting backend logic.
    Pick a random emoji, pick 3 wrong answers, shuffle all 4, send them back.
    Get this working and test it with Postman before touching the frontend.
*/

const port = process.env.PORT
app.listen(port, ()=>console.log(`Server started at ${port}`))