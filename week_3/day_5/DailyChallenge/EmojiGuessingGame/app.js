import express from 'express';
import dotenv from 'dotenv'
import emojis from './data.js'
import session from 'express-session'

dotenv.config();

const app = express();

app.use(express.json())
app.use(express.static('.'))

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true
}))

const finishedScores = []


app.get('/', (_req, res) => {
    res.sendFile('/index.html')
})


app.get('/api/question', (req, res) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]

    const wrongAnswers = emojis.filter(emoji => emoji.name !== randomEmoji.name).sort(() => 0.5 - Math.random()).slice(0, 3)

    const options = [randomEmoji, ...wrongAnswers].sort(() => 0.5 - Math.random())

    // activePlayers.push(randomEmoji)
    req.session.correctAnswer = randomEmoji.name

    req.session.score = req.session.score ?? 0

    res.json({
        emoji: randomEmoji.emoji,
        options: options.map(emoji => emoji.name)
    })
})


app.post('/api/guess', (req, res) => {
    const { playerGuess } = req.body;
    const correctAnswer = req.session.correctAnswer;

    req.session.score = req.session.score ?? 0;

    if (!correctAnswer) {
        return res.status(400).json({ error: "No active question. Please get a new question." });
    }

    const isCorrect = playerGuess === correctAnswer;
    if (isCorrect) {
        req.session.score++;
    }

    res.json({
        correct: isCorrect,
        feedback: isCorrect ? "Correct! Well done! 🎉" : `Wrong! The correct answer was ${correctAnswer}. 😅`,
        score: req.session.score,
        correctAnswer: correctAnswer
    });

    // Clear the question so they can't guess again until a new one is fetched
    req.session.correctAnswer = null;
})

app.post('/api/leaderboard', (req, res) => {
    const { name } = req.body
    const playerScore = req.session.score ?? 0

    if (name) {
        finishedScores.push({ name, score: playerScore });
        req.session.destroy((err) => {
            if (err) {
                console.error("Session destroy error:", err);
                return res.status(500).json({ error: "Could not end session" });
            }
            res.json({ message: "Score submitted!", name, score: playerScore });
        });
    } else {
        res.status(400).json({ error: "Name is required" });
    }
})

app.get('/api/leaderboard', (_req, res) => {
    const sortedScores = [...finishedScores].sort((a, b) => b.score - a.score).slice(0, 10);
    res.json(sortedScores);
})

const port = process.env.PORT
app.listen(port, () => console.log(`Server started at ${port}`))