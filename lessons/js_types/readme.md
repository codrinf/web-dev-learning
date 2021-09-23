# JS Types: Primitives
Programming languages all have built-in data structures, but these often differ from one language to another.

JavaScript has 5 main primary types:
`number, string, boolean, undefined, null`

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
* [JavaScript - Reference vs Primitive Values/ Types](https://www.youtube.com/watch?v=9ooYYRLdg_g)
* [Javascript.info Javascript Data Types](https://javascript.info/types)
* [TutorialRepublic Javascript Data Types](https://www.tutorialrepublic.com/javascript-tutorial/javascript-data-types.php)






