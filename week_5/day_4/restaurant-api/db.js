import {Pool} from 'pg';
import { config } from "dotenv";

config();

const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE_DB,
    password: process.env.PASSWORD_DB,
    port: 5432
})


pool.connect().then(()=>{
    console.log('Connected to the database')
}).catch((err)=>{
    console.log(err)
})


export default pool;