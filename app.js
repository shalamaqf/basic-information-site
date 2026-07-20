const express = require('express');
const path = require("node:path");

// create express app
const app = express();
const authorRouter = require('./routes/authorRouter')
const bookRouter = require('./routes/bookRouter')
const indexRouter = require('./routes/indexRouter')

// set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


const links = [
    { href: '/', text: "Home"},
    { href: '/about', text: "About"}
];

const users = ['Rose', 'Cake', 'Biff'];

app.get('/', (req, res) => {
    res.render("index", { links: links, users: users })
});

app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/', indexRouter);



const port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }

    console.log(`My first Express app - listening on port ${port}!`)
})

// middleware function to handle all error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});