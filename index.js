var server = require("http");
console.log("Testrr");
server
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hellooo World!");
  })
  .listen(8080);
