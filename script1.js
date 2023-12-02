let str = "hello";
let reverse = '';

//reverse = olleh

for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
}

if (str == reverse) {
    console.log("String is palindrome");
}

console.log("Reverse : ", reverse);


//multiplication table
/* 
    i=1;


    j=1;
    1*1 = 1;

    i=1
    j=2
    1*2 = 2

    i=1
    j=3
    1*3=3

    .
    .
    .

    i=1;
    j=10
    i*10 = 10


    i=2;

    i=2
    j=1;
    2*1 = 2

    i=2
    j=2
    2*2 = 4

    .
    .
    .
     
    i=2
    j=10
    2*10=20

    ...i=10


*/

{
    for (let i = 1; i <= 10; i++) {

        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}\n`);
        }
    }
}





{

    let arr = [10, 20, 5, 40, 50];


    //Sum

    function arrSum(arr) {

        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            //arr[0] = 10, sum = 0 + arr[0] = 0 + 10 = 10;
            //arr[1] = 20, sum = 10 + arr[1] = 10 + 20 = 30;
            //arr[2]=30, sum = 30 + arr[2] = 30 + 30 = 60;
            //...
            //sum = 100 + 50 = 150
            sum = sum + arr[i];
        }

        console.log("Sum : ", sum);

        return sum;

    }

    console.log("arrSum : ", arrSum(arr));
    let arrSumVar = arrSum(arr);
    console.log("arrSumVar : ", arrSumVar);


    //Average
    let average = arrSum(arr) / arr.length;
    console.log("Average : ", average);


    //Min
    let min = arr[0]; //10

    for (let i = 0; i < arr.length; i++) {

        //arr[0] < min -> 10 < 10 -> false
        //arr[1] < min -> 20 < 10 -> false
        //arr[2] < min -> 5 < 10 -> true -> min = 5;
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log("Min : ", min);



    //Max
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {

        //arr[0] > 10 -> 10 > 10 -> false
        //arr[1] > 10 -> 20 > 10 -> true -> max = 20
        //arr[2] > 20 -> 5 > 20 -> false 
        //arr[3] > 20 -> 40 > 20 -> true -> max=40
        //arr[4] > 40 -> 50 -> true -> max=50
        //arr[i],i=5 , length=5, 5<5 -> false -> loop stops

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log("Max : ", max);

}


{

    //Program to convert negative values in an array to possitive
    function arrToPossitive(arr) {

        let i = 0;
        while (i < arr.length) {

            if (arr[i] < 0) arr[i] = arr[i] * -1;
            i++;
        }

        return arr;

    }

    let arr = [-1, 1, -2, 2, -10, 10, -100, 100]
    let newArr = arrToPossitive(arr);
    console.log("newArr : ", newArr);
}


//Sum of even and odd
{
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            console.log("Even : ", i);
            evenSum = evenSum + i;
        } else {
            console.log("Odd : ", i);
            oddSum = oddSum + i
        }
    }

    console.log("evenSum : ", evenSum);
    console.log("oddSum : ", oddSum);
}


{
    let inp = document.getElementById('inp');
    inp.addEventListener('onsubmit', (e) => {
        console.log(e)
    })
}


{

    //Normal function
    function printHello() {
        console.log("Hello");
    }

    printHello();

    //Recursive function
    let i = 0;
    function count() {
        i++;
        while (i <= 10) {
            console.log(i);
            count(); //Recursive function call
        }

    }

    count(); //Function call
    //1,2,3,....10


    console.log("Countdown using recursive function call");

    function countdown(n) {

        if (n <= 0) {
            console.log("Done");
        } else {
            console.log(n);
            countdown(n - 1); //Recursive call
        }

    }

    countdown(5);//Normal function call

    //countdown(5), countdown(4), countdown(3), countdown(2), countdown(1),countdown(0), Done

    console.log("Factorial using recursive function call");

    function factorial(n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    let fact = factorial(5);
    console.log("Factorial : ", fact);

    //5 * factorial(4) => 5 * (4 * factorial(3)) => 5 * (4 * (3 * factorial(2))) => 5 * 4 * 3 (2 * factorial(1)) => 5 * 4 * 3 * 2 * 1
}


{

    let myForm = document.getElementById('myForm');
    console.log("Form : ", myForm);

    var datas = {};
    let arr = [];

    myForm.addEventListener('submit', function (e) {

        e.preventDefault();//Stops default behaviour of form

        let email = document.getElementById('email');
        let email_value = email.value;
        console.log("email : ", email_value);

        let password = document.getElementById('password');
        let password_value = password.value;
        console.log("password : ", password_value);

        datas.email = email_value;
        datas.password = password_value;

        // console.log("datas : ", datas);
        handleDatas(datas);
    });


    function handleDatas(datas) {

        console.log("Datas : ", datas);
        let message = document.getElementById('message');
        let flag = true;

        //Validation
        if (arr.length > 0) {

            for (let i = 0; i < arr.length; i++) {

                if (arr[i].email == datas.email) {
                    message.innerHTML = "Email already found";
                    flag = false;
                    break;
                }

            }

        }
    
        if(flag) {
            arr.push(datas);
            message.innerHTML = "Success";
            console.log("arr : ", arr);
        }else {
            message.innerHTML =  "Email already found"
        }



    }

}