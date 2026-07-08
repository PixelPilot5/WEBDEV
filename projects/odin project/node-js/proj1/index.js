
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a server object
const server = http.createServer((req, res) => {
    let filepath;
    if(req.url === "/"){
        filepath = path.join(__dirname, 'index.html');
        res.statusCode=200;
    }
    else if(req.url === "/about"){
        filepath = path.join(__dirname, 'about.html');
        res.statusCode=200;
    }
    else if(req.url === "/contact-me"){
        filepath = path.join(__dirname, 'contact-me.html');
        res.statusCode=200;
    }
    else{
        filepath = path.join(__dirname, '404.html');
        res.statusCode=404;
    }

    fs.readFile(filepath, (err, data) => {
  if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    return;
  }
  res.writeHead(res.statusCode, { "Content-Type": "text/html" });

  res.end(data);
});
});


server.listen(8080, 'localhost', () => {
  console.log(`Server running at http://localhost:8080/`);
});