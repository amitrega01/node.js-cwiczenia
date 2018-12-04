console.log('Zbuduj alfabet za pomocą bufora i wyświetl go w ascii i UTF ');

var buf = new Buffer('aąbcćdeęfghijklłmnńoópqrsśtuvxyzźż');

let asci = buf.toString('ascii');
let utf8= buf.toString('utf8');

console.log('ASCII: ' +asci);
console.log('UTF8: '+ utf8)