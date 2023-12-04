console.log(this);

let obj = {
    name : "John",
    getAge : function () {
        console.log(this);
    }
}

console.log(obj.name);
console.log(obj.getAge());


function greet(message, message1) {
    console.log("message : ",message);
    console.log("message1 : ",message1);

    console.log("this  : ",this);
    console.log("name : ", this.name);
}

// greet("Hello");

//call method
greet.call(obj, "Hello", "Hello1");

//bind method
let boundGreet = greet.bind(obj,"Hello", "Hello1");
console.log("boundGreet : ", boundGreet);
boundGreet();


//apply method
greet.apply(obj,["Helllo", "Hello1"]);

