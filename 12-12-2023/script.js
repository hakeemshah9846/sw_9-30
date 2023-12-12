console.log("First line...");
console.log("Second line");


//Timers
// setTimeout( () =>{
//     console.log("callback function");
// },4000);

// setTimeout( () =>{
//     console.log("callback function1");
// },5000);

//Event based asynchronous operation
// btn.addEventListener(function () {
//     console.log("Event callback")
// });

// let datas  = fetch('https://jsonplaceholder.typicode.com/users');//Accessing external resource
// console.log("datas : ", datas);

console.log("Third line...");



//Synchronous Single Threaded Language

//CallStack
//Event loop
//Microtask queue
//Callback queue
//Web space environment
//Asynchronous operation



//get
//post
//put
//delete


console.log("\n\n\nAjax..");

let xhr = new XMLHttpRequest();

xhr.open("get",'https://jsonplaceholder.typicode.com/users');

xhr.send();

console.log("xhr response : ",xhr);

xhr.onreadystatechange = function () {
    console.log("readyState : ", xhr.readyState);

    if(xhr.readyState == 4) {
        console.log("response : ", xhr.response);
        console.log("type of response : ", typeof(xhr.response));

        let parsed_response = JSON.parse(xhr.response);
        console.log("parsed_response : ", parsed_response);
        console.log("type of parsed_response : ", typeof(parsed_response));

    }

}






