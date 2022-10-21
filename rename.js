var fs=require("fs");
fs.rename('file1.txt','file1_n.txt',function(err,suc)
{
	if(err)
	{
	  console.error(err);
	}
	else
	{
		console.log("successly renamed");
	}
});
