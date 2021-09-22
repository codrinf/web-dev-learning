# IF, ELSE, ELSE IF and SWITCH statements

## IF statement

The `if` statement executes a block of code (a list of instructions) if a condition is evaluated as `true`.

```javascript
if (condtion) {
  // execute code here
  // this is named STATEMENT
}
```
Following the `if` keyword, in round parentheses, a condition is given. This condition is evaluated if it is `true` or `false`. The [end  of the document](#truthy-and-falsy) covers more about how these conditions.

After the condition, curly brackets are placed. Between them will be the instructions that will be executed if the condition is met. 

## ELSE statement

There are many real life scenarios were evaluating if a condition is met is not enough. Most of the time, an application will also execute some instructions if the condition is FALSE.

The `else` statement executes a block of code (a list of instructions) if a condition is evaluated as `false`. This can only be used in combination with the [IF statement](#if-statement).

```javascript
if (condtion) {
  // execute code here
  // this is the true STATEMENT
} else {
  // execute code here
  // this is the false STATEMENT
}
```

## ELSE IF statement

There are also many real life scenarios were evaluating a single condition is not enough. Sometimes, an application will have more complicated checks before a set of instructions is executed.

If a condition is evaluated as `false`, the `else if` statement will evaluate a **new** condition and if it is `true`, then it will execute a list of instructions. This can only be used in combination with the [IF statement](#if-statement).

```javascript
if (condtion1) {
  // execute code here
  // this is the STATEMENT for condition1
} else if (condition2) {
  // execute code here
  // this is the STATEMENT for condition 2
} else if (condition3) {
  // execute code here
  // this is the STATEMENT for condition 3
} else {
  // execude code here
  // this is the STATEMENT if all previous condition do not pass (default)
}
```
Multiple `else if` statements can be chained to verify multiple conditions. If we want to exectue a **default** code in case all conditions are evaluated to `false`, then we can end the chain with an `else` statement. However, this is not mandatory, the code can run without the default statement.

![IF ELSE IF ELSE diagram](https://media.geeksforgeeks.org/wp-content/uploads/if-elseif-ladder.jpg)

**FUN FACT**

There is no `elseif` syntax in **JavaScript**. The actual behavior is: `else` and `if` statements are chained to form `else if` behavior that other programming languages support.

Javascript supports a shorthand writing of the 2 statements without using curly brackets if there is only one block of code following the statement.

## SWITCH statement

The `switch` statement evaluates the value of a given expression and checks the result against each `case`. If the expression matches the case **clause**, then the list of instructions associated with that `case` will executed. Then the execution proceeds to the next case and checks against its value.

The `switch` statement syntax also accepts a `default` case. This case will execute if the value of the expression does not match any of the `case` **clauses**. This parameter is **optional**.

```javascript
switch (expression) {
  case clause1:
    // execute code here
    // statement for case 1
  case clause2:
    // execute code here
    // statement for case 2
    break;
  ...
  case clause3:
    // execute code here
    // statement for case 3
    break;
  ...
  case clauseN:
    // execute code here
    // statement for case N
    break;
  default:
    // execute code here
    // statement for default case (only when no case was matched the expression)
}
```

The `break` keyword ensures that the execution of the `switch` statement stops immediately if the associated `case` is **solved**. This parameter is optional and if omitted, the execution will continue to the next case.

Moreover, the `switch` statement allows to bind more cases to a statement (list of instructions). The syntax for this scenario can be seen below:

```javascript
switch (animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
    console.log('This animal is extinct.');
  default:
    console.log('Are you sure this is an animal?');
}
```
[example taken from MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)


![SWITCH diagram](https://simplesnippets.tech/wp-content/uploads/2018/10/switch-case-statements-flow-diagram-in-javascript.jpg)

## Truthy and Falsy

The conditions detailed above can have many forms. The simplest form will be to use a value of a variable that is boolean.

```javascript
const firstNumber = 5;
const secondNumber = 2
const isLarger = firstNumber > secondNumber;

if (isLarger) {
  console.log('The first number is larger than the second number');
} else {
  console.log('The first number is not larger than the second number');
}
```
Another solution is to give as condition an expression that will be evaluated automatically.

```javascript
const firstNumber = 5;
const secondNumber = 2

if (firstNumber > secondNumber) {
  console.log('The first number is larger than the second number');
} else {
  console.log('The first number is not larger than the second number');
}
```
However, there are many other scenarios where these statements are used. A common case, is when the code must check if the user input is valid.

### Truthy

The following values are `truthy`:

- The keyword `true`
- {}
- []
- 42
- "0"
- "false"
- -42

[examples taken from MDN documentation](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

```javascript
const userInput = 10; // same behavior happens if the value is 0

if (userInput) {
  // the code will execute this statement
} else {
  // the code will NOT execute this statement
}
```

### Falsy

The following values are `falsy`:

- The keyword `false`
- 0
- null
- undefined
- Empty string - ""
- NaN

[examples taken from MDN documentation](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
```javascript
const userInput = 0; // same behavior happens if the value is 0

if (userInput) {
  // the code will NOT execute this statement
} else {
  // the code will execute this statement, because 0 is falsy
}
```

## More information

For more reading material please visit the [resources section](./resources.md).

For an extended working example please check out the project attached to this folder.

To better understand these concepts, it is recommended to try out the 15-minute brain food exercies from the [homework section](./homework.md)