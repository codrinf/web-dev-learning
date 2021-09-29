// Primitive Types behavior:

// All variables and their values are kept in memory
// So, when we declare variable a, b and c with their values, a new place in memory is allocated for each of them
let a = 100;
let b = 'Mike';
let c = false;

// When we assign these variables to other variables using =, we COPY the value to the new variable. They are copied by value.
// A new place in memory is allocated and the value is COPIED there.
let x = a;
let y = b;
let z = c;

console.log('a = ', a);
console.log('b = ', b);
console.log('c = ', c);

console.log('x = ', x);
console.log('y = ', y);
console.log('z = ', z);

// If we reassign one of the initial variables, only themselves are affected, as there is no connection between the 2 sets
a = 200;
b = 'Mary';
c = true;

console.log('a = ', a);
console.log('b = ', b);
console.log('c = ', c);

console.log('x = ', x);
console.log('y = ', y);
console.log('z = ', z);

// Reference Types behavior:

// When a reference variable is declared, it not strongly connected with it's value, 
// but gets a reference to the memory place where that value is stored
let employee = {
  name: 'Mike',
  age: 22,
  position: 'developer'
}

// When we assign this variables to another variables using =, we DON'T COPY the value but COPY the REFERENCE.
// The value itself ({name: 'Mike', age: 22, position: 'developer'}) is NOT COPIED.
let secondEmployee = employee;

console.log('employee = ', JSON.stringify(employee));
console.log('secondEmployee = ', JSON.stringify(secondEmployee));

// If we change a something inside the object through any of the both variables (employee or secondEmployee) the SAME PLACE in memory changes!
// So both variables, referencing the SAME PLACE IN MEMORY, will have the SAME VALUE!
employee.name = 'Merry';
employee.skills = 'many';

console.log('employee = ', JSON.stringify(employee));
console.log('secondEmployee = ', JSON.stringify(secondEmployee));

// Now, this connection is lost if we REASSIGN one of the variables to a different value.
secondEmployee = {
  name: 'John'
}
employee.name = 'Merry the Great';

console.log('employee = ', JSON.stringify(employee));
console.log('secondEmployee = ', JSON.stringify(secondEmployee));

// Arrays behave in similar way
let fruits = ['apple', 'watermelon'];
let otherFruits = fruits;

otherFruits.push('pear');

console.log('fruits ', JSON.stringify(fruits));
console.log('otherFruits ', JSON.stringify(otherFruits));

// Tons of bugs in production are caused by these scenarios, please consider taking time to really understand them
