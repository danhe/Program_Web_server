//console.log(process.argv);
var somme = 0;
for(var i = 2; i <= process.argv.length - 1; i++){
	somme += Number(process.argv[i]);
}
console.log(somme);