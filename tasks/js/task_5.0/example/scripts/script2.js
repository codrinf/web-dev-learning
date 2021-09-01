


document.addEventListener('DOMContentLoaded', (event) => {


  drawUI().then(() => listenForClick())

 // printLogs();

 // listenForClick();


});


async function drawUI() {
 console.log('drawUI START')

 const theCall = await fetch('https://jsonplaceholder.typicode.com/users');
 const result = await theCall.json();

 const ul = document.getElementById('container');
 result.forEach(element => {
   const li = document.createElement('li');
   li.id = element.username;
   li.className = 'user';
   li.innerHTML = element.name;
   ul.appendChild(li);
 });

 console.log('drawUI END')
}

function listenForClick() {

 console.log('listenForClick START')

 var list = document.getElementsByClassName("user");

 for (let item of list) {
   item.addEventListener('click', (clickedEl) => {
     console.log('rthis.id ', clickedEl.target.id)
   })
 }
}

async function printLogs(){
//
}