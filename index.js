// Create a server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
});

server.listen(8080, 'localhost', () => {
    console.log('Listen to port 8080')
})