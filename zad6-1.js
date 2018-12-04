var fs = require("fs");
// Asynchronous read
fs.readFile("plik1.txt", function(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log();
  console.log("ASYNCHRONICZNIE: " + data.toString());
});
// Synchronous read
var data = fs.readFileSync("plik2.txt");
console.log("SYNCHRONICZNIE: " + data.toString());
