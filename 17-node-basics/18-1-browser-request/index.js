// load http module
// const http = require('http');
import http from 'http';

// create http server
http
  .createServer((req, res) => {
    // content header
    res.writeHead(200, { 'content-type': 'text/plain' });

    // write message and signal communication is complete
    res.end('Hello, World!');
  })
  .listen(8124);

console.log('Server running on port 8124');
