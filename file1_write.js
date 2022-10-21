var fs=require("fs");
fs.writeFile('file.txt','welcome to mst lab',function(err,succ) 
{
   if (err) throw err;
	console.log("Succesfully written");
});
