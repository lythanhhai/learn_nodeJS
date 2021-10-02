// thêm http
const http = require("http");
// thêm file system
const fs = require('fs');
// thêm đường dẫn
const path = require('path');
const hostName = "localhost";
const port=3001;

// const server = http.createServer((req,res) => {
//     console.log(req.headers);
//     res.statusCode=200;
//     res.setHeader('content-type','text/html');
//     res.end('<html><body><h1>Hello,world!</h1></body></html>')
// })

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method);
  
    if (req.method == 'GET') {
      var fileUrl;
      if (req.url == '/') fileUrl = '/index.html';
      else fileUrl = req.url;
  
      var filePath = path.resolve('./public'+fileUrl);
      const fileExt = path.extname(filePath);
      if (fileExt == '.html') {
        fs.exists(filePath, (exists) => {
          if (!exists) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + 
                        ' not found</h1></body></html>');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(filePath).pipe(res);
        });
      }
      else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + fileUrl + 
                ' not a HTML file</h1></body></html>');
      }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + 
                ' not supported</h1></body></html>');
    }
  })

server.listen(port,hostName, () => {
    console.log(`serrver running at http://${hostName}:${port}`);
});