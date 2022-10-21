var fs=require("fs");
fs.unlink('file1_n.txt',function(err,suc)
{
	if(err)
	{
	  return console.error(err);
	}
	else
	{
		console.log("sucees");
	}
});
