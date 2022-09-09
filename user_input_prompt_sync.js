
// read values from user

//  npm install prompt-sync in nodejs command prompt

const prompt=require('prompt-sync')();
a=prompt("enter a value ");
a=Number(a);
even_odd(a);
function even_odd(a)
{
	for(i=1;i<=a;i++)
	{
	   if(i%2==0)
 	   {
	     console.log("%d is even",i);
	   }
	   else
	   {
	     console.log("%d is odd",i);
	   }
	}
}


