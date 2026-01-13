//  A class is a blueprint for creating objects with predefined properties and methods.
//  Before classes, JavaScript used constructor functions and prototypes to achieve similar functionality.

// *****before classes*****

// Function Constructor Example
function Car(brand){
    this.brand = brand;
    this.start = function(){
        console.log(`The ${this.brand} car has started.`);
    };
}
// here evry time we create a new car object, a new copy of the start method is created in memory. To avoid this, we can define the method inside a class.

const car1 = new Car("BMW");
const car2 = new Car("AUDI");
console.log(car1.start() === car2.start()); // Output: false because car1 and car2 have different copies of the start method.




// *****using classes*****
class car{
    constructor(brand){
        this.brand = brand;
    }

    start(){
        console.log(`The ${this.brand} car has started.`);
    }
}
const car3 = new car("BMW");
const car4 = new car("AUDI");
console.log(car3.start() === car4.start()); // Output: true because both car3 and car4 share the same start method from the prototype.



// Example 1
class Student {
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, Marks: ${this.marks}`);
    }

    check(){
        if(this.marks >= 40){
            console.log(`${this.name} have passed the exam.`);
        }else{
            console.log(`${this.name} have not passed the exam.`);
            
        }
    }
    
    grade(){
        if(this.marks >= 80){
            console.log(`${this.name} received an A grade.\n`);
        }else if(this.marks >= 60){
            console.log(`${this.name} received a B grade.\n`);
        }else{
            console.log(`${this.name} received a C grade.\n`);
        }
    }
}

const student1 = new Student("Alex", 45); 
const student2 = new Student("Sam", 35); 
const student3 = new Student("Tom", 75); 

student1.displayInfo();
student1.check();
student1.grade();

student2.displayInfo(); 
student2.check();
student2.grade(); 

student3.displayInfo(); 
student3.check();
student3.grade(); 


