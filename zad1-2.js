console.log("Co jedną sekundę pięd razy wyświetlana litera ‘a’ co 10 ms ");
int=setInterval(myFun,1000);

var counter = 0;
function myFun() {
	timeout=setInterval(wypiszA,10);
}

function wypiszA() {
	if	(counter < 5) {
		console.log("a");
		counter ++;
	} else {
		counter = 0;
		clearInterval(timeout);
		
	}
}