var fs=require("fs");
fs.open('file_new1.txt','r+',function(err,succ) 
{
   
   fs.writeFile('file_new1.txt','Hi Tej',function(err,succ) 
   {
	console.log("succes");
	});
   fs.readFile('file_new1.txt','utf8',function(err,succ) 
   {
	console.log(succ);
	});

});
