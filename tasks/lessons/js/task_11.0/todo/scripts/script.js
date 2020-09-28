// ****** Default values for params:
function multiply(a, b = 2) {
  return a * b;
}
// console.log('result multiply 1 ', multiply(4, 6));
// console.log('result multiply 2', multiply(4));
// console.log('result multiply 3', multiply('10ope'));



// ****** Object Destructuring:
const myObj = {
  type: 'first',
  'score': 90, // de explicat keys in string sau nu!
  'age': 109,
  car: true
}

function getObj(obj) {
  // const type = obj.type;
  // const score = obj.score;

  const { type, score, car } = obj;

  console.log('type ', type);
  console.log('score ', score);
}
// getObj(myObj);

async function loadJSON(path) {
  const response = await fetch(path);
  const content = await response.json();

  if (content) {
    addItemToUI(content.items[0]);
  }

}
loadJSON('./data/items.json');

function addItemToUI(item) {

  // const name = item.Name;
  // const price = item.Price;

  const { Names, Price } = item;

  // const { 
  //   Names:names,  
  //   Price:price, 
  //   Modifiers: modifiers 
  // } = item;

  // console.log('name ', names);
  console.log('price ', Price);
  
  // const ro = item.Names.ro;
  // const { Names: {ro} } = item;

  // console.log('ro ', ro);

  // const { Names: { ro: roName } } = item;
  // console.log('ro ', roName);

  // const { length: myStringLength } = 'A string'
  // console.log('length ', myStringLength)
}



// ****** Array Deconstruction:

function testArrayDec() {

  // const date = ['outstide', 'red', 'BK'];

  // const year = date[0]
  // const month = date[1]
  // const day = date[2]

  // const [year, day, month, myObj] = date;

  // console.log('year', year)
  // console.log('month ', month)
  // console.log('day ', day)
  // console.log('myObj ', myObj)


  // const [year, , day] = date
  // console.log('year', year)
  // console.log('day ', day)


  // const nestedArray = [1, 2, [3, 4], 5];
  // const [one, two, [three, four], five] = nestedArray
  // console.log(one, two, three, four, five)
}
// testArrayDec();


// ****** Spread Operator
function testSpread() {

  const tools = ['hammer', 'screwdriver'];

  // const otherTools = ['wrench', 'saw'];

  // const myTool = 'my tool'

  // const allTools = tools.concat(otherTools);
  // allTools.push(myTool);

  // const allTools = [...tools, ...otherTools, myTool];

  // console.log('allTools ', allTools);

  // Used to create a copy:
  // const toolsCopy = [...tools];
  // toolsCopy.push('new tool');

  // const tools2 = tools;
  // const tools2 = [...tools];

  // tools2.push(' askdhkas ');

  // console.log('tools ', tools);

  const toolsCopy = [...tools, 'new tool'];

  console.log('tools ', tools);
  console.log('toolsCopy ', toolsCopy);

  // Spread pe strings:
  const string = 'hello'
  const stringArray = string.split('');
  console.log('stringArray ', stringArray);
}
// testSpread();

function spreadObjs() {
  const originalObject = { enabled: true, darkMode: false };
  
  // const secondObject = Object.assign({}, originalObject);
  // const secondObject = { ...originalObject };
  const secondObject = { ...originalObject, newKey: 99 };

  console.log('secondObject ', secondObject);
}
// spreadObjs();



// ****** Spread on Function Call:
function multiplySpread(a, b, c) {
  return a * b * c
}
const y = 3;
const u = 2;
const r = 1;
// console.log('multiply(1, 2, 3) ', multiplySpread(y, u, r));

const numbers = [1, 2, 3, 9090]
// console.log('multiply(...numbers) ', multiplySpread(...numbers));

// ****** Spread on function params:
function restTest(...args) {
  console.log('restTest, args', args)
  let res = 1;
  args.forEach(x => res = res * x);
  return res;
}
// console.log('restTest ', restTest(1, 2, 3));

function extractKeysFromObj(obj, ...keysToExtract) {
  const retObj = {};
  
  // console.log('obj ', obj)
  // console.log('keysToExtract ', keysToExtract);

  keysToExtract.forEach(x => {
    retObj[x] = obj[x];
  });

  return retObj;
}
const obj = {
  name: 'ionut',
  score: 90,
  age: 12
}
// const obj1 = extractKeysFromObj(obj, 'name', 'score');
// console.log('obj1 ', obj1);

// const obj2 = extractKeysFromObj(obj, 'age', 'score');
// console.log('obj2 ', obj2);

// OLD Age shit:
function testArguments() {
  // console.log('first ', first)
  // console.log('second ', second)

  console.log('arguments ', arguments);

  for(let t of arguments){
    console.log('arg ', t)
  }

  // arguments.forEach(x => console.log('x ', x))

  return first + ' >>>>> ' + second;
}

const newString =  testArguments('how', 'many', 'un al treilea param');

console.log('nmew string ', newString);