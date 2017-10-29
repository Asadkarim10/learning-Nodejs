const http = require('http');
http.createServer(function(request,response) {
   // console.log("Server is running")
    response.end("Hello World");

}).listen(1000,function() {
  //  console.log("Server is running")
})

//.listen(3001);






