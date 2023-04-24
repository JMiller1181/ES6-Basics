// combine 2 arrays using spread
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let numbers = [...numbers1, ...numbers2];
console.log(numbers);
// arrow function that squares a number
let square = (num) => {
  num *= num;
  return num;
};
console.log(square(3));
// create new array of squared numbers using .map
let squares = numbers.map((i) => square(i));
console.log(squares);
// arrow function that checks if a number is even
let isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(6));
console.log(isEven(5));
// filters the squares array to contain only even numbers
let evenSquares = squares.filter((i) => isEven(i) === true);
console.log(evenSquares);
// deconstructing to pull out first and second even squares
const firstEvenSquare = evenSquares[0];
const secondEvenSquare = evenSquares[1];
console.log(firstEvenSquare);
console.log(secondEvenSquare);
// using template literal to log variables
for (i of numbers) {
  console.log(`numbers array: ${i}`);
}
for (i of squares) {
  console.log(`squares array: ${i}`);
}
for (i of evenSquares) {
  console.log(`evenSquares array: ${i}`);
}
console.log(`firstEvenSquare: ${firstEvenSquare}`);
console.log(`secondEvenSquare: ${secondEvenSquare}`);
