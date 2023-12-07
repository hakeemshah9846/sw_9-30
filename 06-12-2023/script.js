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



class Animal {
    name;

    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("Animal walking");
    }
}


class Dog extends Animal {
   nickName;

    constructor(name,nickName) {
        super(name);//Calls parent constructor
        this.nickName = nickName;
    }

    walk() {
        console.log("Dog walking...");
    }
}


let myAnimal = new Animal("Monkey");
console.log("myAnimal : ", myAnimal);
myAnimal.walk();

let myDog = new Dog("Parent of arjun","Arjun");
console.log("myDog : ", myDog);
myDog.walk();



{

    //Getters and setters
    class car {

        constructor(name) {
            this.name = name;
        }

        //Without using getters and setters
        //  setColor(color) {
        //     this.color = color;
        // }

        // getColor() {
        //     return this.color;
        // }


        //Using getters and setters
        set setColor(color) {
            this.color = color;
        }

        get  getColor() {
            return this.color;
        }
        
    }

    let myCar = new car("Benz");

    //Setting color
    // myCar.setColor("Green"); //Without using setter
    myCar.setColor = "Green"; //Using setter



    console.log("myCar : ", myCar);

    //Getting color
    // console.log("Color of myCar : ", myCar.getColor()); //Without using getter
    console.log("Color of myCar : ", myCar.color);// Using getter



}



