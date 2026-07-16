// routes/indexRouter.js
const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.send('./views/index.html', { root: __dirname})
})

indexRouter.get('/about', (req, res) => {
    res.send('./views/about.html', { root: __dirname})
})

indexRouter.get('/contact-me', (req, res) => {
    res.send('./views/contact-me.html', { root: __dirname})
})

indexRouter.use('/', (req, res) => {
    res.send('./views/404.html', { root: __dirname})
})

module.exports = indexRouter;