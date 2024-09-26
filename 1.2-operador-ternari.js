// Exercici 1
// Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

const potConduir = edat => edat >= 18 ? 'Pots conduir' : 'No pots conduir';

console.log(`Amb 18 anys: ${potConduir(18)}`);
console.log(`Amb 16 anys: ${potConduir(16)}`);

// Exercici 2
// Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

const biggerNum = (num1, num2) => num1 > num2 ? 'num1 es més gran' : 'num2 es més gran';

console.log(biggerNum(40, 35));
console.log(biggerNum(35, 40));

// Nivell 2

// Exercici 3
// Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

const numSign = num => num > 0 ? 'positiu' : num == 0 ? 'zero' : 'negatiu'; 

console.log(numSign(23));
console.log(numSign(-23));
console.log(numSign(0));

// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

const trobarMaxim = (a, b, c) => (
	a > b ? a > c ? a : c : b > c ? b : c
)

console.log(trobarMaxim(5, 20, 3));
console.log(trobarMaxim(2, 2, 3));

// Nivell 3

// Exercici 4
// Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

const parOImpar = arr => {
	for (let i = 0; i < arr.length; i++)
	{
		arr[i] % 2 == 0 ? console.log(`${arr[i]} és parell`) : console.log(`${arr[i]} és imparell`);
	}
}

console.log(parOImpar([1, 2, 3, 4, 5, 6, 8, 11]));