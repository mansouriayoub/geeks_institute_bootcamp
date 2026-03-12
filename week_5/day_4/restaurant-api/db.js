import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    database: process.env.DATABASE_DB,
});

pool.connect((err, _client, release) => err ? console.log(err) : (console.log('Connected to the database'), release()))
    /*{
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected to the database');
        release();
    }
});*/

export default pool;