import express, { json } from 'express';
import pg from 'pg';
import { pgPool } from './pg_connections.js';

var app = express();
const {Client} = pg;


app.listen(3001, () => {
    console.log('the server is running..');

});


// let's define an endpoint

app.get('/',  (req, res) => {

    res.send('you just called root endpoint');
});

//CUSTOMER

app.get('/customer', async (req, res) => {

    try {
        const result = await pgPool.query('SELECT * FROM customer')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

});

//MOVIE

app.get('/movie',  async (req, res) => {

    try {
        const result = await pgPool.query('SELECT * FROM movie')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

});

//GENRE

app.get('/genre', async (req, res) => {

    try {
        const result = await pgPool.query('SELECT * FROM genre')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

});

//REVIEW

app.get('/review', async (req, res) => {

    try {
        const result = await pgPool.query('SELECT * FROM review')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

});

//FAVORITE

app.get('/favorite', async (req, res) => {

    try {
        const result = await pgPool.query('SELECT * FROM favorite')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

});

