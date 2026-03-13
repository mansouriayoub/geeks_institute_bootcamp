import express from 'express';
import {config} from 'dotenv';
import menuRoutes from './routes/menuRoutes.js';

const app = express();

config();

app.use(express.json());

app.use('/api', menuRoutes);

const PORT = process.env.HOST_PORT;

app.listen(PORT, ()=> console.log(`server at port ${PORT}`))