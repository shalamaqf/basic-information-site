const express = require('express');

// create express app
const app = express();

const port = 3000;
app.listen(port);


// routing
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
})

app.get('/contact-me', (req, res) => {
    res.sendFile('./views/contact-me.html', { root: __dirname });
})

app.use('/', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})