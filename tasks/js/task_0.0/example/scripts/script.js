// 4 primitive types: string, number, boolean, undefined, null
// 3 reference types: object, array , function (array or function is an object in JS)
// (I've skipped some)


// !Toate datele cu care lucram, stau in memorie, sub forma de bits de 1 si 0
// !Caracteristica principala a variabilelor este de "linkui" codul tau cu aceste portiuni din memorie


// !Remember Objects are mutable, primitive types are immutable

// Question: Primitive types are immutable, because they have no methods attached that can mutate it. Cum adica?




// R: In cazul unui array, spre exemplu, ai functia .push, in cazul stringurilor sau al numerelor, nu ai nicio functie asemanatoare.
// Daca vrei sa schimbi valoarea unei variabile de tip primitive, ii vei da noua valoare:

let myString = 'prune,mere,pere';
// let myString2 = myString;

// console.log(myString.toUpperCase());
// console.log(myString2)


// myString.replace(',', ' ');

// myString = myString.split(',').join(' ');
// console.log('myString ', myString);

// const h = 'hello';
// const upperString = h.toUpperCase();
// console.log('upperString ', upperString);


var status = "OPEN"; // JS aduce textul "OPEN" in memorie, la o locatie specifica, apoi "linkuieste" acea bucata de memorie cu variabila "status". Faca asta intr-un tabel
status = "CREATED" // Pentru ca JS NU poate schimba valoarea unei variabile immutable, aloca o noua bucata de memorie, in care scrie "CREATED" si udateaza tabelul de variabile

function updateStatus(){
  var logText = status;// JS COPIAZA bucata de momorie spre care "pointeaza" variabila status, si o "linkuieste" cu logText
  // console.log('status = ', logText);
  
  logText = "UPDATED"; // Pentru ca JS NU poate schimba valoarea unei variabile immutable, aloca o noua bucata de memorie, in care scrie "UPDATED" si udateaza tabelul de variabile
  // console.log('status = ', logText);
}

updateStatus();
// console.log('status = ', status);


// BOOLEANS:
const valueToCheck = "test";

// if(!!valueToCheck){ // Double negations
//   console.log('IS TRUE')
// }else {
//   console.log('IS FALSE')
// }


// Falsy:
// 0
// -0
// null
// false
// NaN
// undefined
// ""


// NUMBERS:
// console.log('undefined == undefined ', undefined == undefined)
// console.log('NaN == NaN ', NaN == NaN);

// const t = 2 + NaN;
// console.log('t ', t);

// Because a lot of vars can be NaN but still have different values: 
const c = "123";
const a = '90';
const b = 'different stirng';

// console.log('Number(c) ' , parseInt(c));
// console.log('Number(a) ' , parseInt(a));
// console.log('Number(b) ' , parseInt(b));

// console.log('a === b ', parseInt(a) == parseInt(b))
