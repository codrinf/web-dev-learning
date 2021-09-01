// 
var varInFirstScript = 900001;


function ceva() {
  // scope functien
  function somethin() {
    // o
    var t = 9;
    let i;

    if (true) {
      console.log('t ', t);
      var t = "T VALUE";
      let i = 0;
      const CONST_T = 'MYVALUE';
    }

    console.log('t ', t);
    console.log('i ', i);
    console.log('CONSGT ', CONST_T);

  }
  somethin();
  console.log('t din ceva', t);
}
ceva();

// ******* var vs let vs const: 
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
// Variabile declarate cu var au unul din cele 2 scope-uri: global (window in browser) sau al unei functii

// if (true) {
//   var ifVar = 'some value';
// }
// console.log('ifVar ', ifVar)

// Hoisting: "Ridicarea" variabilelor in primele randuri ale scope-ului:
// Liniile:

// console.log('hoistedVar ', hoistedVar);
// console.log('hoistedLet ', hoistedLet);

// var hoistedVar = 'some value';
// let hoistedLet = 'some other value';

// console.log('hoistedVar ', hoistedVar);


// Devin:
// var hoistedVar = undefined;
// console.log('hoistedVar ', hoistedVar);
// hoistedVar = 'some value';

// Variabile declarate cu var se pot REDECLARA
// var u = 9;
// var u = 12;
// console.log('u ', u);

// let op = 9;
// let op = 12;
// console.log('op ', op);


// let sau const au ca scope block-ul din care face parte: global, function, if, for, while (cod intre acoloda: {})
if (true) {
  let letVar = 'some value';
}
// console.log('letVar ', letVar)

// let NU se poate redeclara, dar se poate reinitializa
let o = 9;
// let o = 12;

// const NU se poate redeclara, si nici nu se poate reinitializa
const LOGIN_INFO = {
  server: 'wwww.myserver.com/api/',
  port: 8080
}
// LOGIN_INFO = {};
// LOGIN_INFO.port = 8090;
// console.log('LOGIN_INFO ', LOGIN_INFO);


// ******* Scopes: spatiul in care se declara variabile si accesul la ele
// 
// Parent Scope: window
function createAVar() {
  // Child Scope
  var a = 21;
}
createAVar();
// console.log('a ', a);


// var b = 'sd' ;
function createBVar() {
  b = 21;
  // .,..
  // ...
  if (b > 2) {
    console.log(' b e mai mare')
  }
}
createBVar();
// console.log('b ', b);


var t = 6;
function changeT() {
  t = 9;
}
changeT();
// console.log('t ', t)



// ******* Context
// this in a function
// this in method
// this in a constructor

// console.log(this)

var aa = 12;


// console.log('aa ', aa);
// console.log('aa ', window.aa);
// console.log('aa ', this.aa);

console.log('this  global ', this)

function testContext() {
  console.log('testContext ', this);

  function testChild() {
    var aa = "alta valoare";
    // console.log('this testChild ', getFileName());
  }
  // testChild();

  function getNames() {

  }
}

// testContext();
// window.testContext();

// serverService.getItems = null;


// console.log('call din serviciu ', serverService.getItems());

var hobbies = [];

var obj = {

  nameTO: 'ion',

  hobbies: ['beer', 'summer', 'gin'],


  log: function () {// method > function inside an object
    // console.log('obj this', this);

    // function tare (){
    //   console.log(' dinb tare ', this);
    // }
    // tare();

    this.hobbies.forEach((hobby) => {
      // console.log('hobby ', this);
      console.log(this.nameTO, ' si imi place sa ', hobby);
    })

    // this.hobbies.forEach((hobby) => {
    //   // console.log('hobby2 ', hobby);
    //   console.log('this2 ', this)
    // })

    // function objTestChild() {
    //   // console.log('this objTestChild ', this);
    // }

    // objTestChild();
  },

  newLogFunction() {
    console.log(' newLogFunction', this)
  }
}

// obj.log();
// obj.newLogFunction();

// let items = ['ceve'];

// document.addEventListener('DOMContentLoaded', () => {

//   console.log('DOM ', this)

//   document.getElementById('my-div').addEventListener('click', function ()  {

//     console.log('items ', this.items);

//   })
// })





// function Video(title) {
//   // console.log('this ', this);

//   this.scrollbars = title;
//   // console.log('Video.this ', this)

// }

// const video1 = new Video('filmul meu preferat');

// console.log('video ', video1);
// console.log('window ', window);
