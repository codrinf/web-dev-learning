// Assigning a value to a boolean variable:
const isSummer = false;
const checked = true;

console.log('isSummer ', isSummer);
console.log('checked ', checked);

// Assigning a value to a boolean variable by an expression:
const areEqual1 = (5 == 5);
const areEqual2 = (10 == 5);

console.log('areEqual1 ', areEqual1);
console.log('areEqual2 ', areEqual2);

const a = 12;
const areEqual3 = (a == 5);
console.log('areEqual3 ', areEqual3);

// Shorter way to write it expression:
const areEqual4 = 10 == 10;
console.log('areEqual4 ', areEqual4);

// We can also check if something is different:
const areDifferent = 12 != 10;
console.log('areDifferent ', areDifferent);

// We can also evaluate a more complex expression (using &&):
const isTrue1 = (12 == 10) && (5 == 5);
console.log('isTrue1 ', isTrue1);

// We can also evaluate a more complex expression (using ||):
const isTrue2 = (12 == 10) || (5 == 5);
console.log('isTrue ', isTrue2);



