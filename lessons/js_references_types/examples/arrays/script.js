// We declare an empty array and populate it with some values:
const favoriteColors = [];

favoriteColors.push('red');
favoriteColors.push('black');
favoriteColors.push('blue');

console.log('favoriteColors ', JSON.stringify(favoriteColors)); // log the whole array
console.log('favoriteColors[0] ', favoriteColors[0]); // log first element first element

// In JavaScript, Arrays can contain different types of data:
const randomThings = [15, 'bike'];
const car = 'BMW';

randomThings.push(car);
randomThings.push(false);
randomThings.push({
  name: 'Mary',
  age: 30
});
randomThings.push(favoriteColors);
console.log('randomThings ', JSON.stringify(randomThings)); // log the array

// We can edit an element in array though it's index.
// Let's suppose we must replace "bike" with "motorcycle":
// First we find the index of "bike", then edit it:
const bikeIndex = randomThings.indexOf('bike'); // will return 1
randomThings[bikeIndex] = 'motorcycle';
console.log('randomThings ', JSON.stringify(randomThings)); // log the array
