// Array functions

// concat : merges two or more arrays and returns a new array.
// every : tests whether all elements in the array pass the test implemented by the provided function.
// find : returns the value of the first element in the provided array that satisfies the provided testing function.
// filter : creates a new array with all elements that pass the test implemented by the provided function.
// foreach : executes a provided function once for each array element. (does not return a new array)
// from : creates a new, shallow-copied Array instance from an array-like or iterable object.
// indexof : returns the first index at which a given element can be found in the array, or -1 if it is not present.
// reduce : executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// map : creates a new array populated with the results of calling a provided function on every element in the calling array.
// reverse : reverses the order of the elements of an array in place. The first array element becomes the last, and the last array element becomes the first



// 1. given an array of numbers, use the map function to create a new array with each number squared.
const numbers = [1, 2, 3, 4, 5];

const new1 = numbers.map(num => num * num); 
console.log(new1); // Output: [1, 4, 9, 16, 25]

// 2. given an array of words, use the filter function to create a new array containing only numbers greater than 20.
const num = [10, 20, 30, 40, 50];
const new2 = num.filter(mark => mark > 20);
console.log(new2); // Output: [30, 40, 50]

// 3. Combine array and remove duplicates from an that merged array
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];


const merged = arr1.concat(arr2);
const unique = [];

for (let i = 0; i < merged.length; i++) {
  if (unique.indexOf(merged[i]) === -1) {
    unique.push(merged[i]);
  }
}
console.log(unique);



// create a class called student that stores a student's name and marks (in an array) and a method that checks if the student has passed all the subjects (marks >= 40) using every() method

class Student {
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }
    hasPassed(){
        return this.marks.every(mark => mark >= 40); // returns true if all marks are >= 40, otherwise false
    }
}

const student1 = new Student("Alice", [45, 78, 89, 90]);
const student2 = new Student("Bob", [35, 67, 80, 90]);
console.log(`${student1.name} has passed all subjects: ${student1.hasPassed()}`); // true
console.log(`${student2.name} has passed all subjects: ${student2.hasPassed()}`); // false


// create a class Order that stores order id and an array of item prices. 

class Order{
    constructor(item, price){
        this.item = item;
        this.price = price;
    }
    getTotal(){
        return this.price.reduce((total, price) => total + price, 0);
    }
    getExpensiveItems(max){
        return this.price.filter(i => i > 500);
    }
    getItems(){
        console.log(`${this.item} : ${this.price}`);
    }
}

const order1 = new Order("Order1", [100, 200, 300, 600, 700]); // total = 1900
console.log(`Total price for ${order1.item} is: ${order1.getTotal()}`);  // 1900
console.log(`Expensive items: ${order1.getExpensiveItems()}`) // [600, 700]
order1.getItems(); // Order1 : 100,200,300,600,700
