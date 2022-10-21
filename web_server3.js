var http=require('http');
http.createServer(function(req,res)
{
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<body bgcolor='orange'>");
	res.write("<h1> Welcome to MST lab</h1>");
	res.end();
}).listen(5051);
console.log("server 5051 started");
