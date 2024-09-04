const http = require('http')

// Create an HTTP tunneling proxy
const proxy = http.createServer((req, res) => {
    res.writeHead(200, { 
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*' 
    });

    res.end(JSON.stringify({
        post: {
            title: 'My finest post !!!! Again',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, hic adipisci maxime voluptates nihil incidunt cum reiciendis quidem repellat temporibus expedita? Amet temporibus quo dignissimos rem explicabo consequatur. Aperiam, ipsa!'
        }
    }));
});


const port = 8080;

proxy.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})