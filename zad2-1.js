let user= {
	imie: "Adam",
	nazwisko: "Mitrega",
	zmienImie: function(imie) {
		this.imie = imie;
		eventEmitter.emit('zmianaImienia');
	}
}


var events = require('events');
var eventEmitter = new events.EventEmitter();
var myEventHandler = function () { 
	console.log('Zmieniono imie');
}
eventEmitter.on('zmianaImienia', myEventHandler);

console.log(user.imie + ' '+user.nazwisko);
user.zmienImie("ASDA");

console.log(user.imie + ' '+ user.nazwisko);
