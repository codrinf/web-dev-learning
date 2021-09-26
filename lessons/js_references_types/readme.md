# JS Types: Reference

JavaScript has 2 main reference types: `Object` and `Array`

## Object
Objects are used to store collections of data and more complex entities.

An object can be created with figure brackets `{…}` with an optional list of properties. A property is a `key: value` pair, where `key` is a `string` (also called a **property name**), and `value` can be anything (a primitive or a reference type).

Values can be accessed from objects with the dot operator followed by the key name, or square brackets enclosing the key as a string.

> In example below, we declare an object with some properties and their values:
```javascript
const employee = {
  firstName: "Vlad",
  lastName: "Popescu",
  age: 28,
  isInHoliday: true,
  skills: {
    html: true,
    css: true,
    js: false
  }
} 
console.log('employee.firstName ', employee.firstName) // will log Vlad
console.log('employee ', employee) // will log the hole employee object
```
 
> An object can be declared empty and it's properties can be added afterwords, as in example below. Also, please note that we access object's values with dot operator but also with square brackets.

```javascript
const employee = {};
employee.firstName = "Vlad";
employee['lastName'] = "Popescu";
...
employee.skills = {
    html: true,
    css: true,
    js: false
};
console.log('employee.firstName ', employee['firstName']) // will log Vlad
console.log('employee ', employee) // will log the hole employee object
```


## Array
An array is an ordered list of values (of the same or different types). Each value is called an element and has a unique index, starting with `0`. 

An array can be created with square brackets, `[]`.

> In example below, we declare a simple array, containing a list of fruits:
```javascript
const fruits = ['pears', 'watermelons', 'apples'];

console.log('fruits[0] ', fruits); // will log the hole array
console.log('fruits[0] ', fruits[0]); // will log pears
console.log('fruits[1] ', fruits[1]); // will log watermelons
console.log('fruits[2] ', fruits[2]); // will log apples
console.log('fruits[3] ', fruits[3]); // will log undefined, as we don't have a value on position 3
```

> An array can be declared empty and it's values can be added afterwords, as in example below. 
```javascript
const fruits = [];
fruits[0] = 'pears';
fruits[1] = 'watermelons';
fruits[2] = 'apples';

console.log('fruits[0] ', fruits[0]); // will log pears
console.log('fruits[1] ', fruits[1]); // will log watermelons
console.log('fruits[2] ', fruits[2]); // will log apples
console.log('fruits[3] ', fruits[3]); // will log undefined, as we don't have a value on position 3
```

> Arrays have multiple properties and functions. Some of the basic ones are: `.length`, `.push()`, `.indexOf()`, 
```javascript
const myFavoriteNumbers = [];
console.log('myFavoriteNumbers.length ', myFavoriteNumbers.length) // will log 0, as this is an empty array

myFavoriteNumbers.push(13);
console.log('myFavoriteNumbers.length ', myFavoriteNumbers.length) // will log 1, as we have one element in this array

myFavoriteNumbers.push(9);
console.log('myFavoriteNumbers.length ', myFavoriteNumbers.length) // will log 2, as we have 2 elements in this array

const indexOf9 = myFavoriteNumbers.indexOf(9);
console.log('indexOf9 = ', indexOf9) // will log 1, as element 9 is on position 1 in this array. Remember that an array starts with position 0

const indexOf200 = myFavoriteNumbers.indexOf(200);
console.log('indexOf200 = ', indexOf200) // will log -1, as there is no 200 element in this array
```



## Resources:
* [Javascript.info Object Data Type](https://javascript.info/object)
* [The Net Ninja: Modern JavaScript Tutorial #5 - Objects](https://www.youtube.com/watch?v=X0ipw1k7ygU)
* [Javascript.info Array Data Type](https://javascript.info/array)



