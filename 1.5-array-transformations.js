// Nivell 1

// Exercici 1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const arr = [1, 2, 3, 4];

const arr2 = arr.map(num => num * num);

// console.log(arr2);

// Exercici 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const arr3 = arr.filter(num => num % 2 == 0);

// console.log(arr3);

// Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const arr4 = [1, 10, 8, 11];

const num = arr4.find(num => num > 10);

// console.log(num);

// Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const arr5 = [13, 7, 8, 21];
const suma = arr5.reduce((acc, value) => acc + value, 0);

// console.log(suma);

// Nivell 2

// Exercici 5
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

const arr6 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const ex5 = arr => arr.filter(num => num > 10).map(num => num * 2).reduce((acc, val) => acc + val, 0);

// console.log(ex5(arr6));



// Nivell 3
// Exercici 6
// Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const arr7 = [11, 12, 13, 14];
const every = arr7.every(num => num > 10);
const some = arr7.some(num => num > 10);

// console.log(every);
// console.log(some);