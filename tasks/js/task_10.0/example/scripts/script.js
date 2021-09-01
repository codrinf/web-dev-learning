
let a = 3
function addTwo(x) {
  let ret = x + 2;
  const t = 89;
  return ret;
}
let b = addTwo(a)
console.log(b);


let val = 7
function createAdder() {

  function addNumbers(a, b) {
    let ret = a + b
    return ret
  }

  return addNumbers;
}
let adder = createAdder()
let sum = adder(val, 8)
console.log('example of function returning a function: ', sum)


function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter = counter + 1
    return counter
  }
  return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)

let c = 4;
function addX(x) {
  return function(n) {
     return n + x
  }
}
const addThree = addX(3);
const addTwo = addX(2);




let d = addThree(c)
console.log('example partial application', d)