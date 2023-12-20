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

        }, 500);

    });

}

//Using then-catch
// findUser2(2)
//     .then((user) => {
//         //When resolved
//         console.log("user : ", user);
//         console.log(user.name);
//     })
//     .catch((error) => {
//         //When rejected
//         console.log("\n\n");
//         console.log("error : ", error);
//     });




//using async await
async function getData() {
    try {
        let userData = await findUser2(9);
        console.log("userData : ", userData);

    }catch(error) {
        console.log("error : ", error)
    }

}

getData();


