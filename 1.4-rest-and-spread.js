// Nivell 1

// Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = [...array1, ...array2];

// console.log(array3);

// Exercici 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

// Nivell 2

const suma = (...nums) =>  (
	nums.reduce((acc, curr) => acc + curr, 0)
)

// console.log(suma(5, 5, 5, 5));

// Exercici 3
// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = {
	name: 'car',
	model: 'Focus',
	brand: 'Ford',
}

const objecte2 = {...objecte1};
objecte2.name = 'helicopter';

// console.log(objecte2);

// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const arr = [1, 2, 3, 4, 5, 6];

const [var1, var2, ...var3] = arr;

// console.log(var1);
// console.log(var2);
// console.log(var3);

// Nivell 3
// Exercici 5
// Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

const average = (num1, num2, num3) => (
	(num1 + num2 + num3) / 3
)
const array = [3, 9, 6];
// console.log(average(...array));

// Exercici 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const data = {
	nom: "jordi",
	cognom: "terradas",
	pes: "55kg",
}
const info = {
	hobby: "música",
	feina: "tecnic de so",
}

const persona = {...data, ...info};
console.log(persona);
