// Create a server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    // basic routing
    const path = './views/';
    switch(req.url) {
        case '/' :
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        case '/contact-me':
            path += 'contact-me.html'
            break;
        default:
            path += '404.html'
            break;
    }
});

server.listen(8080, 'localhost', () => {
    console.log('Listen to port 8080')
})