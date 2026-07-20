// routes/indexRouter.js
const { Router } = require('express');
const path = require('path')

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: path.join(__dirname, '..') });
})

indexRouter.get('/about', (req, res) => {
    res.render("about")
})

indexRouter.get('/contact-me', (req, res) => {
    res.render("contact-me")
})

indexRouter.use('/', (req, res) => {
    res.status(404).render("404")
})

module.exports = indexRouter;