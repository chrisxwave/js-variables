//Primo esercizio: Dichiarazione di variabile e tipi primitivi
let name= 'Chris';
console.log(name);

//Tipi primitivi
let number = 42;
let text = 'Hello, World!';
let bool = true;
console.log(number);
console.log(text);
console.log(bool);

//Sostituisci null con operazioni con le stringhe
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

const fullName = firstName + " " + lastName;

console.log(fullName);

//Imposta questa variabile utilizzando una proprietà sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = alphabet.length;
console.log(numberOfLettersInAlphabet);


//Secondo esercizio: Operatori numerici
 const numOne = 8; // NON MODIFICARE QUESTA RIGA
const numTwo = 16; // NON MODIFICARE QUESTA RIGA
const numThree = 32; // NON MODIFICARE QUESTA RIGA

//1.
const numOnePlusNumTwo = numOne + numTwo;
console.log(numOnePlusNumTwo); // Output: 24

//2.
const numThreeTimesNumTwo = numThree * numTwo;
console.log(numThreeTimesNumTwo); // Output: 512

//3.
const numThreeDividedByNumOne = numThree / numOne;
console.log(numThreeDividedByNumOne); // Output: 4

//4.
const numThreeMinusNumOne = numThree - numOne;
console.log(numThreeMinusNumOne); // Output: 24

//5.
const sum = numOne + numTwo + numThree;
console.log(sum); // Output: 56

//6.
const numBytes = (numOne + numTwo + numThree) / numOne;
console.log(numBytes); // Output: 7


//Terzo esercizio: Operatori sulle stringhe

const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA


//1.
const cityIndex = city.indexOf('Y');
console.log(cityIndex); // Output: 4

//2.
const citySubstring = city.substring(4);
console.log(citySubstring); // Output: "York"

//3.
const cityReplaced = city.replace('York', 'Delhi');
console.log(cityReplaced); // Output:  "New Delhi"

//4.
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

//5.
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"