var express = require('express');
var server = express.createServer();
server.configure(function() {
	server.use(express.static(__dirname + '/')).use(function(request, response, next) {
		if(request.url === "404") {
			var body = '404 test';
			response.statusCode = 404;
			response.setHeader('Content-Length', body.length);
			response.end(body);
		} else {
			var body = 'my page';
			response.setHeader('Content-Length', body.length);
			response.end(body);
		}
	})
}).listen(3000);