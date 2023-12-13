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
let btn = document.getElementById('btn');

xhr.open("get",'https://jsonplaceholder.typicode.com/users');

btn.addEventListener('click', () => {
    xhr.send();

})

console.log("xhr response : ",xhr);

xhr.onreadystatechange = function () {
    console.log("readyState : ", xhr.readyState);

         let content = document.getElementById('content');
         console.log("content : ", content);
         let datas = '';

    if(xhr.readyState == 4) {

        if(xhr.status == 200) {
            console.log("response : ", xhr.response);
            console.log("type of response : ", typeof(xhr.response));
    
            let parsed_response = JSON.parse(xhr.response);
            console.log("parsed_response : ", parsed_response);
            console.log("type of parsed_response : ", typeof(parsed_response));
    
            for(let i=0; i<parsed_response.length; i++) {
                datas = datas + `<tr>
                <td>${parsed_response[i].id}</td>
                <td>${parsed_response[i].name}</td>
                <td>${parsed_response[i].username}</td>
                <td>${parsed_response[i].website}</td>
                </tr>`;
            }
    
            content.innerHTML = datas;

        }else {
            console.log("Request failed");
        }
    }else {
        console.log("State not completed");
    }


        /*
        datas = '
        <tr>
            <td>${parsed_response[i].id}</td>
            <td>${parsed_response[i].name}</td>
            <td>${parsed_response[i].username}</td>
            <td>${parsed_response[i].website}</td>
            </tr>

            <tr>
            <td>${parsed_response[i].id}</td>
            <td>${parsed_response[i].name}</td>
            <td>${parsed_response[i].username}</td>
            <td>${parsed_response[i].website}</td>
            </tr>

            <tr>
            <td>${parsed_response[i].id}</td>
            <td>${parsed_response[i].name}</td>
            <td>${parsed_response[i].username}</td>
            <td>${parsed_response[i].website}</td>
            </tr>

            <tr>
            <td>${parsed_response[i].id}</td>
            <td>${parsed_response[i].name}</td>
            <td>${parsed_response[i].username}</td>
            <td>${parsed_response[i].website}</td>
            </tr>
        '

        */




    

}






