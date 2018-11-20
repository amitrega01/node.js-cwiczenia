console.log("Za pomocą liczników wykonaj zdarzenie wyświetlania liczby sekund co 1 sekundę od uruchomienia ");
int=setInterval(myFun,1000);

var sec = 0;

function myFun() {
	console.log(sec++);
}