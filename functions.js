const student = {
    name: "alex", 
    greet : function() { // here greet: we cannot use arrow function inside an object because 'this' will not refer to the object itself
        const sayHello = () => {

        console.log("Hello, " + this.name);
    }

    sayHello();
    
    }

}
student.greet();

