console.log("Dla 30 elementowej tablicy (z alfabetem) wyświetlid po kolei co 0,5s litery przy czym jeżeli jest to samogłoska dodad przerwę 2 sekundy (uśpid licznik ) ");
int=setInterval(fun,500);

var tab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","y","z"];
var samogloski = ["a","e","o","u","y","i"];
var counter  = 0;


function fun() {
	if	(counter < tab.length-1) {
		if	(!samogloski.includes(tab[counter])) {
			
			console.log(tab[counter]);
			counter++;
		} else {
			time = setTimeout(pozniej,2000);
		}
	} else counter= 0;
}
function pozniej() {
	console.log(tab[counter]);
	counter++;
}