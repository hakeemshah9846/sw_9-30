console.log("Hello javascript");

let obj = {
    name : "Harry",
    age : 30,
    greeting : function () {
        console.log("name : ", this.name);
        console.log("age : ", this.age);
    }
}
console.log("obj : ", obj);

obj.greeting();//



//Constructor functions
// function Person(name, age, mark) {
//     this.name = name;
//     this.age = age;
//     this.mark = mark;
//     this.greeting = function () {
//         console.log("name : ", this.name);
//         console.log("age : ", this.age);
//     }

// }


// const person1 = new Person("John", 30, 80);
// console.log("person1 : ", person1);
// person1.greeting();

// const person2 = new Person("Jane", 25, 70);
// console.log("person2 : ", person2);
// person2.greeting();

// //Updting individual objects
// person2.place = "Ernklm";
// console.log("Person2.place : ", person2.place);



// Person.prototype.getMark = function () {
//     return this.mark;
// }


// console.log("Mark of person1 : ", person1.getMark());
// console.log("Mark of person2 : ", person2.getMark());



// Using classes
class Person {
    name;
    age;
    mark;

    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    greeting() {
        console.log("name : ", this.name);
        console.log("age : ", this.age);
        console.log("mark : ", this.mark);
    }
}


let person1 = new Person("John",30,70);
console.log("person1 : ", person1);
person1.greeting();



