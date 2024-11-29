import express from 'express';

var app = express();


app.listen(3001, () => {
    console.log('the server is running..');


});

// let's define an endpoint

app.get('/',  (req, res) => {

    res.send('you just called root endpoint');
});

app.get('/customer',  (req, res) => {

    res.send('Customer info');
});

app.get('/movie',  (req, res) => {

    res.send('Movie info');
});

app.get('/genre',  (req, res) => {

    res.send('Genre info');
});

app.get('/review',  (req, res) => {

    res.send('Review');
});

app.get('/favorite',  (req, res) => {

    res.send('Here are your favorites');
});
