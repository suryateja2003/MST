var http=require('http');
http.createServer(function(req,res)
{
	res.writeHead(200,{'content-type':'text/plain'});
	res.write("<body bgcolor='pink'>");
	res.write("<h1> Welcome to MST lab</h1>");
	res.end();
}).listen(5050);
console.log("server 5050 started");
