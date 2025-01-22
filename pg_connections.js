import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pgPool = new pg.Pool({
    user: 'postgres',
    password: 'Urpourpo2003',
    database: 'postgres',
    host: 'localhost',
    port: '5432'

});

export {pgPool};