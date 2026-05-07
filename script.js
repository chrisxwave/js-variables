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