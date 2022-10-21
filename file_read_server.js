var http=require("http");
var fs=require("fs");
http.createServer(function(req,res)
{
	fs.readFile('file.txt','utf8',function(err,succ) 
	{
   
   	 res.writeHead(200,{'Content-Type':'text/plain'});
   	 res.write(succ);
   	 return res.end();
	});
}).listen(8088);
console.log("8088 server running successfully");