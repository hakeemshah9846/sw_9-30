let arr= [
    {
        name : "amal",
        mark : 60,
        place : "Ernakulam"
    },

    {
        name : "anju",
        mark : 54,
        place : "Trivandrum"
    },

    {
        name : "rohit",
        mark : 60,
        place : "Kollam"
    }
];

console.log("arr : ", arr);


//Array Functions

//forEach()
console.log("forEach ->");

arr.forEach((item, index) => {

    console.log(`item-${index} : `, item);
});



//Find
console.log("Find ->");

const x = arr.find((item)=> {
    return item.name == "anju";
});

console.log("x : ", x);




//Filter
console.log("Filter ->");

const arr1 = arr.filter((item, index) => {
    return item.mark == 60;
});

console.log("arr1 : ", arr1);


//Map
console.log("Map ->");

const arr2 = arr.map((item)=> {
    return item.name;
}); //Retuns an array of same length

console.log("arr2 : ", arr2);


//Reduce
const value = arr.reduce((total, item)=> {
    console.log("total : ", total);
    console.log("item : ", item);
    return total + item.mark;
},0);

console.log("Value : ", value);
















{


//Find sum of squares of elements of a numerical array using forEach
function findSumOfSquares(arr) {

    let sum = 0;

    arr.forEach((element, index) => {
        //element=1 -> sum = 0 + element^2 -> sum = 0 + 1^2 = 0 + 1*1 = 0+1 = 1
        //elemnt=2 -> sum = sum + Math.pow(element,2) -> sum  = 1 + 2^2 = 1 + 4 = 5
        //element=3 -> sum = sum + Math.pow(element,2) -> sum = 5 + 3^2 = 5 + 9 = 14
        sum = sum + Math.pow(element,2);
    });

    return sum;

}


let sumOfSquares = findSumOfSquares([1,2,3]);
console.log("Sum of squares : ", sumOfSquares);




//Find the first even number of an array using find
function findEvenNum(arr) {

    let evenNum = arr.find((element)=> {
        //element=1 -> element%2 == 0 -> 1%2 == 0 -> false
        //element=2 -> element%2 == 0 -> 2%2 == 0 -> true -> loop stops
        return element%2 == 0
    });

    return evenNum;
}

let firstEvenNumber = findEvenNum([1,2,3,4]);
console.log("firstEvenNumber : ", firstEvenNumber);






//Filter all the even numbers in an array using filter function
function findAllEvenNum(arr) {

    let evenNumsArr = arr.filter((element, index)=> {
        //return-array -> [2,4]
        //elememnt=1 -> element%2 == 0 -> 1%2 == 0 -> false
        //element=2 -> element%2 == 0 -> 2%2 == 0 -> true -> return element -> return 2
        //element=3 -> element%2 == 0 -> 3%2 == 0 -> false
        //element=4 -> element%2 == 0 -> 4%2 == 0 -> true -> return element -> return 4
        return element%2 == 0;
    });

    return evenNumsArr;
}

let allEvenNumbers = findAllEvenNum([1,2,3,4]);
console.log("allEvenNumbers : ", allEvenNumbers);






//Double each elements in an array using map
function double(arr) {

    let doubledArr = arr.map((element)=> {
        //return-arr -> [20,40,60]
        //element=10 -> element *2 -> 10*2 = 20 -> return 20
        //element=20 -> element *2 -> 20*2 = 40 -> return 40
        //element=30 -> element *2 -> 30*2 = 60 -> return 60
        return element *2;
    });

    return doubledArr;
}

let doubledNumbers = double([10,20,30]);
console.log("doubledNumbers : ", doubledNumbers);





//Write a function 'productPositive' that takes an array of numbers as input and uses the 'reduce' method to calculate the product of all possitive numbers in an array

function productPositive(arr) {

    const prod = arr.reduce((prod, element) => {
        //element = -1 -> element > 0 -> false -> rturn prod -> 1
        //element = 1 -> element > 0 -> true ->  return prod = prod * element -> prod = 1 * 1 -> prod = 1 -> return 1 -> 1
        //element = -2 -> element > 0 -> false -> return prod -> return 1 -> 1
        //element = 2 -> element > 0 -> true ->  return prod = prod * element -> prod = 1 * 2 = 2 -> return 2 -> 2
        //element = -3 -> element > 0 -> false -> retur prod -> return 2 -> 2
        //element=3 -> element > 0 -> true -> return prod = prod * element -> prod = 2 * 3 = 6 -> return 6 -> 6


        if(element > 0) {
            return prod = prod * element;
        }else {

            return prod;
        }


    },1);

    return prod;//6
}

let product = productPositive([-1,1,-2,2,-3,3]);
console.log("product : ", product);


}
