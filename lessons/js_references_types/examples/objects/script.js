// We declare a simple object:
const human = {
  age: 34,
  name: 'Mary Ervine',
  occupation: 'manager',
}

console.log('human ', human); // We log the object
console.log('human ', JSON.stringify(human)); // We log the object as string


// We can add some more properties to this object, delete ones or edit the existing ones:
human.isInVacation = true;
delete human.age;
human.occupation = 'super manager';

console.log('human ', JSON.stringify(human)); // We will log the object as string, after edit

// In practice you will find this notation as well:
human['occupation'] = 'super super manager';
console.log('human ', JSON.stringify(human)); // We will log the object as string, after edit


// Objects can contain other objects or arrays:
const human2 = {
  age: 28,
  name: 'Mike Perse',
  occupation: 'developer',
  contract: {
    type: 'employee',
    durationInYears: 1,
    startDate: '20/06/2021'
  },
  skills: ['html', 'css', 'js', 'nodejs']
}
console.log('human2 ', JSON.stringify(human2)); // We will log the object as string

// We can extract some of object's properties in new var to be used locally:
const mikeAge = human2.age;
console.log('mikeAge ', mikeAge);

// As you use JSON.stringify to transform an object in string, you can use JSON.parse for the reversed result:
const objAsString = '{"name":"Patricia", "age": 12}';
const human3 = JSON.parse(objAsString);

console.log('human3 ', human3); // We will log the object as string, with just added property