import { config } from 'dotenv';
config();

import express from 'express';
import menuRoutes from './routes/menuRoutes.js';
import "./db.js";

const app = express();

app.use(express.json());

app.use('/api', menuRoutes);

app.use((_req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.HOST_PORT || 3030;

app.listen(PORT, () => console.log(`server at port ${PORT}`))