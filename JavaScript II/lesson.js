/*
* Closure
*/


//declared a function

// function sayHello() {
//     const hello = "Hello";
//     console.log(hello);
//     function sayHelloWorld(){
//         console.log(`${hello} World`);
//         function sayHelloPlanet(){
//             console.log(`${hello} planet`);
//         }
//         sayHelloPlanet();
//     }
//     sayHelloWorld();
// }

// //invoke a function

// sayHello();

// What is a closure
// A closure is the combination of a function and 
// the lexical environment within which that 
// function was declared. 

// Lexical environment 
// Where it was declared 

// function addOne() {
//     let count = 1;
//     console.log(count);
//     count++;
//     function logResult(){
//         console.log(count);
//     }
//     logResult();
// }

// addOne();

// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     }
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2))

//Callback Functions

function multiply(number1, number2) {
    return number1*number2;
}

console.log(multiply(5,10));

function calculate(num1, num2, callback) {
    return callback(num1, num2);
}

function add(num1, num2){
    return num1+num2;
}

const result = calculate(5, 2, multiply);
const addResult = calculate(5,2,add);

console.log(result);
console.log(addResult);

// //

//anonymous function

const array = ["a", "b", "c"]

array.forEach(function (element){
    console.log(element);
})

//same as a callback

function iterate(element) {
    console.log(element);
}

array.forEach(iterate);

// arrow function

array.forEach(element => console.log(element));

//for loop

for (let i = 0; i < array.length; i++){
    const element = array[i];
    console.log(element);
}

//.map
//Iterates on an array and returns a new array
//return is important when using map
//Always a new array, old one stays the same

const numbers = [2,4,8,15];

const doubled = numbers.map(function (num) {
    return num*2;
})

console.log(numbers);
console.log(doubled);

const clients = ["Jodi", "Cameron", "Henry"];

const formattedClients = clients.map(function(client) {
    if (client === "Cameron") {
        client = "Cameron Pope"
    }
    return client.toUpperCase();
})

console.log(formattedClients);

// .reduce
// Executes a reducer funtion on each member of the array
// resulting in a single value

//can take 4 values
//accumulator, current value, current index, source array

const sum = [11,5,6,8]

summed = sum.reduce(function(accumulator, currentValue, currentIndex, sourceArray){
    console.log(accumulator);
    console.log(currentValue);
    console.log(currentIndex);
    console.log(sourceArray);
    return accumulator + currentValue;
})

console.log(summed);

const animals = ["cat", "bat", "ostrich"];

const concatenated = animals.reduce(function (accumulator, currentValue, currentIndex, sourceArray) {
    return accumulator + currentValue;
})

console.log(concatenated);

const names = ["Bella", "Edward", "Jacob"].reduce((accumulator, currentValue, currentIndex, sourceArray) => accumulator + ', ' + currentValue);

console.log(names)

const moreNames = ["Henry", "Jessica", "Elliot"]

console.log(moreNames.join(", "))

// .filter
// Creates a new array of values that pass a truth test

const moreClients = [
    {
        name: "Caleb",
        spend: 0
    },
    {
        name: "Sebastian",
        spend: 4.00
    },
    {
        name: "Aurora",
        spend: 100.00
    }
]

const filteredClients = moreClients.filter(function(client){
    return client.spend === 0;
})

console.log(filteredClients);