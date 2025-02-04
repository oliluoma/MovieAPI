import express, { json } from 'express';
import { pgPool } from './pg_connections.js';

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.listen(3001, () => {
    console.log('server is running..');

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

    //GET MOVIE BY KEYWORD
    let keyword = req.query.keyword;


    try {
        let result;

        if(!keyword){
            result = await pgPool.query('SELECT * FROM movie')
        }else{
            keyword = keyword.toLowerCase();
            keyword = '%'+keyword+'%';

            result = await pgPool.query(
                'SELECT * FROM movie WHERE LOWER(title) LIKE $1', [keyword])
        }


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

//ADDING A MOVIE

app.post('/addmovie', async (req, res) => {

    const title = req.body.title;
    const year = req.body.year;
    const genre = req.body.genre;

    try {
        await pgPool.query(
            'INSERT INTO movie VALUES ($1, $2, $3)', [title, year, genre])
        res.end();
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }


})