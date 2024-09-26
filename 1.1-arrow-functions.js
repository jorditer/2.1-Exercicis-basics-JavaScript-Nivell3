// Exercici 1
// Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

const add = (a, b) => a + b;

// console.log(`3 + 9 = ${add(3, 9)}`);
// console.log(`8 + 7 = ${add(8, 7)}`);

// Exercici 2
// Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

const randomNumber = () => Math.floor(Math.random() * 101);

// console.log(`Random int: ${randomNumber()}`);
// console.log(`Random int: ${randomNumber()}`);

// Exercici 3
// Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.

class Person {
	constructor(name) {
		this.name = name;
	}

	greet = () => {
		console.log(`Hola, ${this.name}`);
	}
}

// const test = new Person ('jordit');
// test.greet();

// Nivell 2


// Exercici 4
// Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.


const printNumbers = (arr) => {
	for (let i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

// const numbers = [1, 2, 3, 4, 5, 6, 42]
// printNumbers(numbers);

// Nivell 3
// Exercici 5
// Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.

setTimeout(() => console.log('Gràcies per l\'espera! :)'), 3000);

// setTimeout(() => console.log('.'), 750);
// setTimeout(() => console.log('.'), 1500);
// setTimeout(() => console.log('.'), 2250);