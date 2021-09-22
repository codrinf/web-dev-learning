// Some examples of actions you may perform with numbers (more to come):

// We declare 2 variables:
const firstName = 'Alex';
const middleName = 'Mike';
const lastName = 'Taylor';

// We concatenate the variables above in a new one and log the result:
const fullName = firstName + middleName + lastName;
console.log('fullName = ', fullName);


// We concatenate the variables above in a new one (but also add some spaces) and log the result:
const fullNameWithSpaces = firstName + " " + middleName + " " + lastName;
console.log('fullNameWithSpaces = ', fullNameWithSpaces);

// You can't substract or do any other math operations on strings:
const difference = firstName - middleName;
console.log('difference ', difference);


// Using Template Literals is easier to concatenate variables:
const fullNameLiteral = `${firstName}-${middleName}-${lastName}`;
console.log('fullNameLiteral = ', fullNameLiteral);

// Using Template Literals for a longer text:
const name = 'Kai';
const age = 2;
const address = 'Main Street, 12';
const info =  `${name} is a ${age} years old kid and lives at ${address}.`;
console.log('info = ', info);