let baza = '[{ "imie": "Adam", "nazwisko": "Mitrega"},{ "imie": "Artur", "nazwisko": "Ulfig"},{  "imie": "Dominik", "nazwisko": "Pezda"}]'
console.log('• Stworzyd bazę danych (3 osoby) w zmiennej opartej o strukturę JSON. (zmienna tekstowy) • Zamienid plik na strukturę • Wyświetlid osoby w pętli • Dodad osobę • Zamienid na ciąg znaków');

let ppl = JSON.parse(baza);
ppl.forEach(element => {
	console.log(element.imie +" "+ element.nazwisko)
});

ppl.push({
	imie: 'Wojtek',
	nazwisko: 'Michalik'
});
console.log();
console.log(">> Dodano nowego")
console.log();
ppl.forEach(element => {
	console.log(element.imie +" "+ element.nazwisko)
});

let string= JSON.stringify(ppl);
console.log();
console.log(string);