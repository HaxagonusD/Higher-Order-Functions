//Exercise #1
//Using filter create one function that only returns the
// even numbers of an array
// Now write a function that returns only the odds
const even = (arr) => arr.filter((number) => number % 2 === 0);
const odd = (arr) => arr.filter((number) => number % 2 === 1);

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

const div6 = (array) => array.filter((number) => number % 6 === 0);

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

const sum = (array) => array.reduce((acc, cur) => acc + cur);

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120
const mul = (array) => array.reduce((acc, cur) => acc * cur);

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

const expo = (array) => array.reduce((acc, cur) => acc ** cur);
//Exercise #6
//using the .filter(), filter out the Full Stack residents

let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const getThemOut = (obj) =>
  obj.filter((user) => user.role != "Full Stack Resident");

//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78
const example = [
  { name: "Josh", age: 24 },
  { name: "Meghan", age: 34 },
  { name: "Samantha", age: 20 },
];

const sumAge = (array) =>
  array.reduce((acc, cur) => acc + cur.age, 0);


