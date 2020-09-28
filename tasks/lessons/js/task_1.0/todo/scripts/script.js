// 4 primitive types: string, number, boolean, undefined, null
// 4 reference types: object, array , function (array or function is an object in JS)
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


// OBJECTS are mutable:
const car = {
  id: '34567',
  model: 'Dacia',
  year: 1995
};// JS stocheaza in memorie { model: 'Dacia', year: 1995 } si "linkuieste" variabila car

// DAR! Obiectele pot suporta schimbari:
// car.model = 'Logan';

// DACA s-ar pastra scenariul de la primitives, ar trebuie realocata o bucata de memorie pentru tot obiectul abia schimbat
// Lucru impractic, mai ales ca obiectul poate fi foarte mare.
// Atunci, se updateaza bucata de memorie potrivita
const secondCar = car; // JS NU copiaza valoarea lui car intr-o noua bucata de memorie, ca la string. 

// Ci "linkuieste" variabila secondCar cu ACEEASI portiune de memorie spre care "pointeaza" car:
// car.model = 'Lada';

// secondCar.model = "BMW";

// console.log('car ', car)


// function addCarPrice(c){
//   // delete c.model;
//   // Call la server bazat pe model si an,
//   // serverul returnesaaaza pretul
  
//   c.Price = 1000;
//   // console.log('c ', c);
// }

// function getColor(c ){
//   // call la server, update: c
//   c.color = "red";
// }
// addCarPrice(car);
// console.log('car  ', car);

// const t = 100;
// let y = t;

// y = 120;

// function changeNumber(n){
//   console.log('n ', n);
//   n = 90;
//   console.log('n ', n);

// }
// changeNumber(t);
// console.log('t ', t);


// Comparatia a doua Obiecte:
console.log('masinile sunt egale ', car == secondCar);

const a1 = {
  name: 'Ion'
};

const b1 = {
  name: 'Ion'
};
console.log('a si b sunt egale ', a1 == b1);

// Concluzie: doua obiecte sunt egale DOAR daca pointeaza spre acceasi zona de memorie
// Comparati obiectele voastre bazandu-va pe key unica (item.ID, button.Link)!

// Functions are also objects (high order functions)
// O functie care primeste ca parametru o alta functie sau returneaza una, este numita high order functions
function getHello(){
  return 'Hello there!';
}

const hiFnct = function() {
  
}

function talk(name, greetings){
  console.log(`${greetings()} I'm ${name}`)
}

// talk('Vlad', getHello);
talk('Ion', hiFnct);

function getData(callback){
  //
  const data = {};
  // Call to sderver

  callback(data);
}

getData(function (data){
  // 
})



// Coercion: "Capacitatea" lui JS de a schimba type-ul unui variabile, in anumite situatii:

const t = 100;
const obj5 = {
  title: 'Yo, my title'
}

// console.log('t = ', obj5, 900)
// console.log('700' + 500);
// console.log(true + 5);
// console.log('b' - 'a');

// console

const serverResponse = {
  type: 'asdad',
  ID: 'asdasd'
};
const userId = serverResponse.userId;
const count = serverResponse.count;

console.log('userdId ', userId)

// if (userId) {
//   console.log('logged in user ', userId);
// } else {
//   console.log('Could not login');
// }

const X2 = 3456;
const Y2 = '3456';

// console.log('X2 == Y2 = ', X2 == Y2);
// console.log('X2 == Y2 = ', X2 === Y2);

const obj = { 
  t: 2345,
  hi: function(){
    console.log('hi!')
  }
 };
// const objString = '[object Object]'; // obj.toString();
// console.log('obj == string = ', obj == objString);

// console.log(obj.hi())
// console.log('my obj = ' + obj.toString());


const person = {
  name: 'My Name Bla bla'
};
const something = 5 + person;
// console.log(something);

person.toString = () => 2;

const something2 = "9" + person;
// console.log(something2);
// De ce toate obiectele trebuie sa extinda proto?

const userLogedin = "False";

const obj7 = {};
const arr = [];

const fun =  () => ({});

console.log('yty ', typeof userLogedin)

console.log('obj ', typeof obj7)
console.log('arr ', Array.isArray(arr))

console.log('arr ', typeof fun)



// if(typeof userLogedin){
//   console.log('e logat')
// }else {
//   console.log('nu e logat')
// }