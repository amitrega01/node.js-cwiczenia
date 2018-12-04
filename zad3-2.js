console.log('Zastosowad pętlę wyrażeo zwrotnych do obsługi przy zastosowaniu rekurencji (także asynchronicznie) ');
function rek (n)  {
	console.log(n);
	process.nextTick(() => rek(n+1))
} 
rek(1);