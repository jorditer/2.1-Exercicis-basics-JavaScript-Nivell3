// Nivell 1

// Exercici 1
// forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: 

let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(name => console.log(name));

// Exercici 2
// for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

for (let nom of noms) {
	console.log(nom);
}

// Exercici 3
// filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. 

let numeros = [1, 2, 3, 4, 5, 6];
let numeros2 = numeros.filter(numero => numero % 2 == 0);

// Nivell 2

// Exercici 4
// for-in: Teniu un objecte amb parells clau-valor:  Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' };

for (let person in obj) {
	console.log(`${person}: ${obj[person]}`)
}

// Exercici 5
// for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: 

let numeros3 = [1, 2, 3, 4, 5, 6];

for (let numero3 of numeros3) {
	console.log(numero3);
	if (numero3 == 5)
		break;
}

// Nivell 3
// Exercici 6
// for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']

for (const[index, value] of noms.entries()) {
	console.log(`Index: ${index}, Value: ${value}`);
}