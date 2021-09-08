// reference node's built-in http library to run a local web server
let http = require('http')

// use the http library to start a web server and listen for HTTP request events and send an HTTP response
http.createServer((req, res) => {
    // write HTTP headers with a 200 OK Status Code
    res.writeHead(200, { 'Content-Type': 'text-plain '})
   res.write('Hello world - our first node page')
   res.end()
} ).listen(3000)

// print message to console to show server is active
console.log('Node server running on port 3000')