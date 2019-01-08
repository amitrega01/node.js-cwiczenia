//DOKONCZYC

var fs = require("fs");
var data = "";
var readerStream = fs.createReadStream("plik1.txt");
const alfabet = Array.from("abcdefghijklmnopqrstuvxyz");

readerStream.on("data", function(chunk) {
  data += chunk;
});

readerStream.on("end", function() {
  console.log(data);
  var temp = Array.from(data);
  let string = "";
  let stringOkrojony = " ";
  let szyfr = " ";

  temp.forEach(letter => {
    string += letter;
  });
  console.log();
  console.log(">>> usuwanie wsyztskich znakow poza spacjami i literami");
  console.log();
  temp.forEach(letter => {
    if (alfabet.includes(letter.toLocaleLowerCase()) || letter == " ")
      stringOkrojony += letter;
  });

  console.log(stringOkrojony);
  console.log();
  console.log(">>> szyfr cezara +3");
  console.log();

  for (i = 0; i < stringOkrojony.length; i++) {
    if (stringOkrojony[i] != " ") {
      szyfr +=
        alfabet[
          (alfabet.indexOf(stringOkrojony[i].toLowerCase()) + 3) %
            alfabet.length
        ];
    } else szyfr += " ";
  }
  console.log(szyfr);
  console.log();
  console.log(">>> zapis do pliku output.txt");
  console.log();

  let writer = fs.createWriteStream("output.txt");
  writer.write(szyfr, "UTF-8");
  writer.end();

  writer.on("finish", function() {
    console.log("Zapisano");
  });
  writer.on("error", function(err) {
    console.log(err.stack);
  });
  console.log("Koniec progamu");
});

readerStream.on("error", function(err) {
  console.log(err.stack);
});
