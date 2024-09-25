const http = require('http');


const server = http.createServer(function (req, resp) {
    resp.setHeader('Content-Type', 'application/json')
    resp.writeHead(200);

    resp.end(JSON.stringify({
        name: 'John Doe',
        age: 45
    }));    
});


server.listen(8080, () => {
    console.log('Server is listening at port 8080');
});

