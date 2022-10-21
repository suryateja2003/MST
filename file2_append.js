var fs=require("fs");
fs.appendFile('file1.txt','mean stack technologies',function(err,succ) 
{
   if (err) throw err;
	console.log("Succesfully written");
});
