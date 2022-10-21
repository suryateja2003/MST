var crypto = require('crypto');

var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('09281de8e33d76d2b73bf38437aed7ef', 'hex', 'utf8')
mystr += mykey.final('utf8');

console.log(mystr); 