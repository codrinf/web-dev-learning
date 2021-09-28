# JS Types: Primitives
Programming languages all have built-in data structures, but these often differ from one language to another.

JavaScript has 5 main primary types:
`number, string, boolean, undefined, null`

There types are “primitive” because their values can contain only a single thing (be it a string or a number or whatever)

## Number
> In example below, `const` adds new variable in our program, `age` is the name of the variable (our choice), `=` assignees a value and `16` is the value.
```javascript
const age = 16;
```

## String
> Below, `const` adds new variable in our program, `firstName` is the name of the variable (again, our choice), `=` assignees a value and `Vlad` is that value (and similar for `secondName`). 

>Please note that a string value start and ends with ' or "
```javascript
const firstName = 'Vlad'; 
const secondName = "Popescu";
```

> Strings have multiple properties and methods. Some of the basic ones are: `.length`, `.indexOf()`, `.slice()`, `.toLowerCase()`, `toUpperCase()`, `.replace()`. 
```javascript
const myString = 'My name is Jennifer';

console.log('myString.length = ', myString.length) // will log 19, as there are 19 letters in this string
console.log('myString.indexOf("is") = ', myString.indexOf('is')) // will log 8, as this is the position where "is" starts (first position is 0)

const subString = myString.slice(3, 7);
console.log('subString ', subString) // will log "name", as slice method cuts a part of the string, starting on position 4, until 7

console.log('myString.toLowerCase = ', myString.toLowerCase()) // will log "my name is jennifer", as toLowerCase method transform each letter in string to lower case

console.log('myString.toUpperCase = ', myString.toUpperCase()) // will log "MY NAME IS JENNIFER", as toUpperCase method transform each letter in string to upper case

console.log('myString replaced = ', myString.replace('Jennifer', 'Mary')) // will log "My name is Mary"
```

>**Template literals:** are delimited by \` and allows embedded logic.
>In example below, we have a variable `no` with value of `3400`. A new variable is created, called `id`. It's value will be `EX-2400`.
```javascript
const no = 3400;
const id = `EX-${no}`;
```

## Boolean
>As for boolean type, there are 2 possible values: `true` or `false`:
```javascript
const isTeacher = false;
const isStudent = true;
```

## Undefined
The `undefined` data type can only have one value, the special value `undefined`.
> In next example, `cars` doesn't get any value, so it is `undefined`.
```javascript
const cars;
console.log(cars);// will write `undefined`
```

## Null
The `null` data type can only have one value, the special value `null`. A null value means there is nothing there.
In practice, you may get this value when calling some data from server.
```javascript
const cars = null;
console.log(cars);// will write `null`
```


### JavaScript is:
  - **loosely typed**: you don’t have to specify what type of information will be stored in a variable in advance

  - **dynamic language**: the language has data types, but does not check that a program's types are "okay" until the program is actually running

**Basically, your variables can change type after your code starts running.**

As opposite to many other programming languages, this is legal in JavaScript (and may be considered a bug or a feature) :

```javascript
let age = 16;
age = 'Alex';
age = false;
```

Your program will consist in many of this kind of variables keeping program's data. On top, you will add logic.


## Resources:
* [Javascript.info Javascript Data Types](https://javascript.info/types)
* [TutorialRepublic Javascript Data Types](https://www.tutorialrepublic.com/javascript-tutorial/javascript-data-types.php)
* [Useful String Methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)







