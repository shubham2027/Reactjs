// ------------------------------------------------------------------------------------------------------------------
// 27 - October - 2025

// 1. Destructure only the first and third elements from the array below and log them to the console.
const colors = ["Red", "Green", "Blue", "Yellow"];
const [firstColor, , thirdColor] = colors;
console.log(firstColor);  // Output: Red
console.log(thirdColor);  // Output: Blue


console.log("\n");


// 2. Create a function sumAll(...nums) that returns the sum of all arguments passed.
function sumAll(...nums){
    return nums.reduce((num, curr) => num + curr, 0);
}
console.log(sumAll(1, 2, 3)); // Output: 6


console.log("\n");


// 3. Create a function filterGreaterThan(limit, ...nums) that returns an array of numbers greater than the specified limit.

function filterGreaterThan(limit, ...nums){
    return nums.filter(num => num > limit);
}
console.log(filterGreaterThan(10, 5, 15, 25, 8, 30)); // Output: [15, 25, 30]

// 4. Write a function studentInfo that takes an object like this: 
        // {name: "John", age: 21, subjects: ["Math", "Science", "English", "AI", "ML"]}
    // Use :
    // a. Destructuting to extract name, age, subjects
    // b. Rest operator to separate core subjects (first 2) and elective subjects (rest)
    // c. Spread operator to clone array before modifying it.

console.log("\n");

// function studentInfo(student){
function studentInfo({name, age, subjects}){
    // const {name, age, subjects} = student;
    console.log(student);
    const [core1, core2, ...electives] = subjects;
    console.log("First Subject: "+ core1 + ", Second Subject: "+ core2 + ", Rest of the Subjects: " + electives);
    const copy = [...subjects];

}
const student =  {name: "John", age: 21, subjects: ["Math", "Science", "English", "AI", "ML"]}
studentInfo(student);