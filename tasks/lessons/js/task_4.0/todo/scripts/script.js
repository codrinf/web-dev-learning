// https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec
// https://www.youtube.com/watch?v=8aGhZQkoFbQ

// ******* Call stack:
// Javascript este single threaded language: parseaza o singura linie de cod intr-un moment dat
// Call stack = o lista de functii care trebuie apelate
// O functie va fi "pushuita" in call stack cand se apeleaza si va fi scoasa cand returneaza o valoare
// !O functie returneaza undefined daca nu are un return specificat!

function getUserValue() {
  const user = {};
  user.name = getUserName();
  user.age = getUserAge();

  return user;
}

function getUserName() {
  return 'Valentin Poporul'
}

function getUserAge() {
  // throw new Error('LASA MA IN PACE');
}


function logUser() {
  const user = getUserValue();
  console.log('user ', user);
}
// Cum arata call stackul?
// logUser();



// ******* Event Loop
// Browser Web API: Threads implemented in C++
// Acest API va retine toate callbackurile
// Prin Event Loop va insera un callback care trebuie apelat in Call Stack.
// Event Loop system va trece in callback in Call Stack, DOAR daca call-stacku-l este gol (toate functiile au return o valoare)


// Daca JS e single threaded language, atunci ce se intampla cand o linie de cod asteapta un raspuns de la server?
// Callbacks!


// function clickClallBac() {

// }

// document.getElementById('my').addEventListener('click', clickClallBac)
// document.getElementById('my2').addEventListener('click', clickClallBac)





// ******* Set Timeout, Set Interval, 
const title = document.createElement('h1');
title.innerHTML = 'Hello you!';
title.id = 'title';


// console.log('title from html ', document.getElementById('title'));

// setTimeout(() => console.log('title from html (setTimeout) ', document.getElementById('title')), 0);

// setInterval(() => {
//   console.log('hi 2 sec')
// }, 2000);


async function checkServer() {
  console.log('server is ok, trust me')
  const response = await getResponse();
  // if (response) {

  // }
  // setTimeout(checkServer, 2000);
  return response;
}

// const checkServerTimeout = setTimeout(checkServer, 2000);

// let checkServerTimeout;
// clearTimeout(undefined);

// let r = checkServer().then(x => );


// 

const response = getUserAge();

const container = document.getElementById('container');
container.appendChild(title);

console.log('title from html after append ', document.getElementById('title'));


