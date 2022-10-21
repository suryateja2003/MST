var fs=require("fs");
fs.readFile('file.txt','utf8',function(err,succ) 
{
   if (err) throw err;
	console.log(succ);
});
