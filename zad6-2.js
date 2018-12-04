//DOKONCZYC

var fs = require("fs");
var data = "";
var readerStream = fs.createReadStream("plik1.txt");
const alfabet = Array.from('abcedfghijklmnopqrstuvxyz');

readerStream.on("data", function(chunk) {

  data += chunk;



});

readerStream.on("end", function() {
  console.log(data);
  var temp = Array.from(data);
  let string = '';
  temp.forEach(letter => {
	  string += letter;
  });
  console.log('usuwanie wsyztskich znakow poza spacjami i literami');
  console.log(string);
});

readerStream.on("error", function(err) {
  console.log(err.stack);
});
