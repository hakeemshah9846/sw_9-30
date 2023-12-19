const str1 = "The cat is white";
const str2 = "rat eats fish";
const str3 = "Is it ok fishe";
const str4 = `
Hello
good meat
is always good
Hai
`;

const regexp1 = /a/;
const result1 = regexp1.test(str1);//Checks if str1 contains letter 'a'
console.log("result1 : ", result1);

const regexp2 = /A/i;
const result2 = regexp2.test(str1);//Checks if str1 contains letter 'a' and performs case-insensitive search
console.log("result2 : ", result2);

const regexp3 = /ab/;
const result3 = regexp3.test(str1);//Checks if str1 contains  'ab'
console.log("result3 : ", result3);

//[] - represents range
const regexp4 = /[crb]a/;
const result4 = regexp4.test(str1);//Checks if str1 contains 'c' 'r' or 'b' before 'a'
console.log("result4 : ", result4);

const regexp5 = /[a-z]a/i;
const result5 = regexp5.test(str1);//Checks if str1 contains any letters in between 'a' to 'z' before a, also 'i' represents case insensitive search
console.log("result5 : ", result5);

const regexp6 = /[a-z0-9]a/i;
const result6 = regexp6.test(str1);//Checks if str1 contains any letters in between 'a' to 'z' or any digits in between 0 to 9 before 'a'
console.log("result6 : ", result6);


//^ represents start of a string
const regexp7 = /^rat/i;
const result7 = regexp7.test(str2);//Checks if str2 starts with 'rat'
console.log("result7 : ", result7);

//$ represents end of a string
const regexp8 = /fish$/i;
const result8 = regexp8.test(str2);//Checks if str2 ends with 'fish'
console.log("result8 : ", result8);


const regexp9 = /^good/im; //m-flag represents multiline matching
const result9 = regexp9.test(str4);//Checks if str4 starts with "good"
console.log("result9 : ", result9);

const regexp10 = /good$/im; //m-flag represents multiline matching
const result10 = regexp10.test(str4);//Checks if str4 ends with "good"
console.log("result10 : ", result10);

const regexp11 = /fishes?/im; //word before '?' is optional for matching
const result11 = regexp11.test(str3);//it matches both fishe and fishes, 's' is optional
console.log("result11 : ", result11);

const regexp12 = /fish(es)?/im; //'()' represents groups
const result12 = regexp12.test(str3);//it matches both fish and fishes, 'es' is optional
console.log("result12 : ", result12);


const regexp13 = /fishes*$/i;//The letter before '*' can occur multiple times in a string
const result13 = regexp13.test(str3);//It matches fishe, fishes, fishesssss..
console.log("result13 : ", result13);


const regexp14 = /fishes+$/i;//The letter before '+' also can occur multiple times in a string, but atleast one occurence is required 
const result14 = regexp14.test(str3);// Here it matches fishes, fishesssss...
console.log("result14 : ", result14);


const regexp15 = /fish.$/i;//Any character can occur after fish, '.' represents any type of character
const result15 = regexp15.test(str3);//Here it matches fishe, fisha,fishb,fish1,fish2 ..., but does not matches fish, a character in place of '.' is a must
console.log("result15 : ", result15);

const regexp16 = /fish.*$/i;
const result16 = regexp16.test(str3);//Here it matches fishe, fishes, fishesss, ..., since due to '*' mutliple charecters are matched
console.log("result16 : ", result16);


const str5 = "Hello";

const regexp17 = /[kjm]/i;
const result17 = regexp17.test(str5);//If there is a 'k' or 'j' or 'm' then it will be true
console.log("result17 : ", result17);

const regexp18 = /[^kjm]/i;
const result18 = regexp18.test(str5);//If there is no 'k' or 'j' or 'm' then it will be true
console.log("result18 : ", result18);

const regexp19 = /[H+]/i;//Atleast one 'H' is required
const result19 = regexp19.test(str5);//
console.log("result19 : ", result19);

const regexp20 = /O$/i; //String ends with 'O'
const result20 = regexp20.test(str5);
console.log("result20 : ", result20);

const regexp21 = /O?$/i; //'O' in string ending is optional
const result21 = regexp21.test(str5);
console.log("result21 : ", result21);

const regexp22 = /O+$/i; //Atleast one 'O' is required in the string ending
const result22 = regexp22.test(str5);
console.log("result22 : ", result22);

//{} - indicates the number of characters, a{2} means "aa", ie 2 a is required
const regexp23 = /L{2}o$/i; //'o' should be exactly after 2 L's
const result23 = regexp23.test(str5);
console.log("result23 : ", result23);

const regexp24 = /L{2,4}o$/i; //'o' should be exactly after between 2 to 4 L's
const result24 = regexp24.test(str5);
console.log("result24 : ", result24);

const regexp25 = /HeL{2,4}o$/i; //'o' should be exactly after between 2 to 4 L's and 'o' is required
const result25 = regexp25.test(str5);
console.log("result25 : ", result25);

const regexp26 = /HeL{2,}o$/i; //2 or more 'L' is required
const result26 = regexp26.test(str5);
console.log("result26 : ", result26);

// \ - indicates escape character, used for matching any characters which has special meaning
const regexp27 = /\d/i; //If there is any digits, it will be true, else it will be false
const result27 = regexp27.test(str5);
console.log("result27 : ", result27);

const regexp28 = /\D/i; //If there is any non-digits it will be true, if there is only digits it will be false
const result28 = regexp28.test(str5);
console.log("result28 : ", result28);

//Suppose we want to match '.' in a string, since '.' has a special meaning in regular expressions it will not work as expected and will match everything

const regexp29 = /./i; //If there is a '.' or anything it will match
const result29 = regexp29.test(str5);
console.log("result29 : ", result29);

//So we can write it as
const regexp30 = /\./i; //if there is any '.' in the string it match, else it will be false
const result30 = regexp30.test(str5);
console.log("result30 : ", result30);

//So '\' (backslash) is used to escape special charactors




//Date validation

//1
const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/i; //String should start with 1 or 2 digits, then after '-' symbol, then again 1 or two digits, after '-', ending digits should be 4

//2
// | - indicates or case 0 | 1 means either 0 or 1 can occur
const regexpForDate1 = /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i;// In the first group- If first charecter is 0 or 1 or 2 then the second character can be any digits(0-9) or if the character is '3' then the second character should be '0' or '1'
//In the second group if the first character is '0' then second character can be any digits(0-9) or if first character is 1 then the second character should be 0 or 1 or 2
//In the last group four digits is allowed


function checkResult(value) {
    const result = regexpForDate1.test(value);

    if (result) {
        return '';
    } else {
        return 'Invalid String';
    }
}

const value = "16-12-2023";

let validation_result = checkResult(value);
console.log("validation_result : ", validation_result);


function onChange(arg) {
    let validation_result = checkResult(arg.value);
    let label = document.getElementById('error');
    if (validation_result) {
        label.innerHTML = validation_result;
    } else {
        label.innerHTML = validation_result;
    }


}


//'^' and '$' can only be used in the start and end of a string and cannot be used in between strings to match, so we use lookaheads for giving starting and ending in between strings

//(?=) - Possitive Lookahead, A(?=B) -> Matches : A only if A is followed by B
//(?!) - Negative Lookahead, A(?!B) -> Matches : A only if A is not followed by B
//(?<=) - Possitive Lookbehind, (?<=B)A -> Matches : A only if A is preceded by B
//(?<!) - Negative Lookbehind, (?<!B)A -> Matches : A only if A is not preceded by B

{

    let dateString = '19-12-2023';

    let regex = /-\d+-/; //It will match also '-12-' in result and gives as result array
    const result = dateString.match(regex);

    console.log("result : ", result);

    //Inorder to match exactly '12' in dateString we can use lookaheads
    let regex1 = /(?<=-)\d+(?=-)/;//This will exactly match '12' in string
    const result1 = dateString.match(regex1);
    console.log("result1 : ", result1);

    //Example for Negative Lookahead and Negative Lookbehind
    let phone = "(91)1234567890";

    //To match numbers outside of (91)
    const phoneRegex = /(?<!\()\d+(?!\))/;
    const phoneRegexResult = phone.match(phoneRegex);
    console.log("phoneRegexResult : ", phoneRegexResult);


}


{

    function findUser(userId) {

        let userInfo = [
            {
                id: 1,
                name: "John",
                age: 30,
            },
            {
                id: 2,
                name: "Jane",
                age: 25,
            }
        ];

        let user = userInfo.find((element) => element.id == userId);
        return user;
    }


    let user = findUser(2);
    console.log("user : ", user);





    function findUser1(userId) {



        let userInfo = [{
            id: 1,
            name: "John",
            age: 30,
        },
        {
            id: 2,
            name: "Jane",
            age: 25,
        }
        ];

        //Invoking an asynchronous operation
        setTimeout(() => {
            let user = userInfo.find(() => userInfo.id === userId);
            return user;
        }, 500);

    }


    //due to asynchronous behaviour of javascript this will not work
    let user1 = findUser1(2);
    console.log("user1 : ", user1);




    //Using promises
    function findUser2(userId) {

        return new Promise((resolve, reject) => {
            // console.log("userId : ", userId);

            //Invoking an asynchronous operation
            setTimeout(() => {

                let userInfo = [{
                    id: 1,
                    name: "John",
                    age: 30,
                },
                {
                    id: 2,
                    name: "Jane",
                    age: 25,
                }
                ];

                let user = userInfo.find((element) => element.id === userId);

                if (user) {
                    resolve(user);

                } else {
                    reject("User not found");

                }

            }, 3000);

        });


    }

    findUser2(3)
        .then((user) => {
            //When resolved
            console.log("\n\n");
            console.log("user : ", user);
            console.log(user.name);
        })
        .catch((error) => {
            //When rejected
            console.log("\n\n");
            console.log("error : ", error);
        });

}


// {

//     //Synchronous single threaded language
//     console.log("\n\n");


//     console.log("Line1");
//     console.log("Line2");

//     //Asynchronous operation
//     setTimeout(()=> {
//         console.log("From setTimeOut...");
//     },3000);

//     let data = fetch('url');

//     console.log(data.name);

//     console.log("Line3");
// }