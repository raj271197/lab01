const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  console.log(`${method} request for ${url}`);

  if (method === 'GET') {
    let filePath = './pages';

    if (url === '/' || url === '/index') {
      filePath += '/index.html';
    } else if (url === '/about') {
      filePath += '/about.html';
    } else {
      filePath += '/404.html';
      res.statusCode = 404;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (method === 'POST') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'POST request received' }));
  } else {
    res.writeHead(405);
    res.end('Method Not Allowed');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});