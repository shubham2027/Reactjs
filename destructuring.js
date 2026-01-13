// destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Array Destructuring
const fruits = ["Apple", "Banana", "Cherry"];
const [first, second, third] = fruits;

console.log(first);  // Output: Apple
console.log(second); // Output: Banana
console.log(third);  // Output: Cherry



console.log("\n");



// Object Destructuring
const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(city); // Output: New York


console.log("\n");



// Spread Operator(...) : spreads the elements of an array or properties of an object into individual elements or properties.

const num1 = [1, 2, 3];
const num2 = [...num1, 4, 5, 6]; // Spreading elements of num1 into num2
console.log(num2); // Output: [1, 2, 3, 4, 5, 6]


console.log("\n");


// Merging Objects using Spread Operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }



console.log("\n");



// Rest Operator(...) : collects multiple elements into a single array or object.
const numbers = [1, 2, 3, 4, 5];
const [a1, a2, ...rest ] = numbers; // Collecting remaining elements into 'rest'
console.log(a1);   // Output: 1
console.log(a2);   // Output: 2
console.log(rest); // Output: [3, 4, 5]



console.log("\n");



// Using spread Operator in Function
function print(...marks){ // takes all the inputs and collects them into an array called marks
    console.log(marks);
}

print(10, 20, 30, 40); // Output: [10, 20, 30, 40]