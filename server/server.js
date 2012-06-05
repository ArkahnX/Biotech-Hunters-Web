var express = require('express');
var server = express.createServer();
server.configure(function() {
	server.use(express.favicon(__dirname + '/favicon.png', { maxAge: 2592000000 }));
	server.use(express.static(__dirname + '/')).use(function(request, response, next) {
		console.log(request.url)
		if(request.url === "/favicon.ico") {
		} else {
			response.send(404);
		}
	})
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/ \npress ctrl+c to terminate');