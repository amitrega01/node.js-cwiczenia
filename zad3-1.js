console.log('Zaprojektowad listę oraz wyświetlid jej zawartośd anynchronicznie (poprzez funkcję nextTick) (*)');

let lista = ["Poz1", "Poz2","Poz3","Poz4","Poz5","Poz6","Poz7"];

lista.forEach(element => {
	process.nextTick(function(){ console.log(element); }); 
});