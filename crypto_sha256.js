// encryption using sha256
const crypto=require('crypto');
const secret='abcdefg';
const hash=crypto.createHmac('sha256',secret)
		 .update('cse-c')
		 .digest('hex');
console.log(hash);


