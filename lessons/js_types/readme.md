# JS Types: Primitives
Programming languages all have built-in data structures, but these often differ from one language to another.

JavaScript has 5 main primary types:
`number, string, boolean, undefined, null`


> In example below, `const` adds new variable in our program, `age` is the name of the variable (our choice), `=` assignees a value and `16` is the value.
```javascript
const age = 16;
```

> Below, `const` adds new variable in our program, `firstName` is the name of the variable (again, our choice), `=` assignees a value and `Vlad` is that value (and similar for `secondName`). 

>Please note that a string value start and ends with ' or "
```javascript
const firstName = 'Vlad'; 
const secondName = "Popescu";
```

>*Template literals:* are delimited by \` and allows embedded logic.
>In example below, we have a variable `no` with value of `3400`. A new variable is created, called `id`. It's value will be `EX-2400`.
```javascript
const no = 3400;
const id = `EX-${no}`;
```

>As for boolean type, there are 2 possible values: `true` or `false`:
```javascript
const isTeacher = false;
const isStudent = true;
```

> In next example, `cars` doesn't get any value, so it is `undefined`.
```javascript
const cars;
```

> One way to check some variable value is to use:
```javascript
const friendName = 'Maria';
console.log(friendName); // will write `Maria`
const cars;
console.log(cars); // will write `undefined`
```

JavaScript is:
  - **loosely typed**: you don’t have to specify what type of information will be stored in a variable in advance

  - **dynamic language**: the language has data types, but does not check that a program's types are "okay" until the program is actually running

Basically, your variables can change type after your code starts running.

As opposite to many other programming languages, this is legal in JavaScript (and may be considered a bug or a feature) :

```javascript
let age = 16;
age = 'Alex';
age = false;
```

`let` is used to also introduce a variable to program.

Your program will consist in many of this kind of variables keeping program's data. On top, you will add logic.


<details>
<summary markdown="span">Advanced</summary>

### null vs undefined

</details>

----







