// const counter = () => {
//     // Return a function that when invoked increments and returns a counter variable.
//     // Example: const newCounter = counter();
//     // newCounter(); // 1
//     // newCounter(); // 2
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     }
//   };

// const newCounter = counter();

// console.log(newCounter());
// console.log(newCounter());

// Create a function that houses 2 nested functions inside of it
// Create a unique variable for each function you created
// Test out where you can log the unique variables for each function.

// function topLevel() {
//     let x = 2;
//     console.log(x);
//     return function(){
//         y = 2
//         x = x + y;
//         nextLevel = function(){
//             return y;
//         }
//     }
// }

// test = topLevel();

// console.log(test());


//Moving on to callbacks

// const elements = ["earth", "wind", "fire", "water"];

// const newForEach = (list, callback) => {

//     for (let i = 0; i < elements.length; i++){

//     callback(list[i], i);

//     }
// }

// newForEach(elements, (item, index) => {
//     console.log(item, index);
// });

function Parent(attributes) {
    this.gender = attributes.gender;
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }  
  
Parent.prototype.yabbaDabba = function () {
    console.log('Yabba dabba doo!');
  };
  
Parent.prototype.speak = function () {
    return(`Hello, my name is ${this.name}`);
  };
  
  
  
  const fred = new Parent({'gender': 'Male', 'age': 35, 'name': 'Fred', 'homeTown': 'Bedrock'});
  
  const wilma = new Parent({'gender': 'Female', 'age': 37, 'name': 'Wilma', 'homeTown': 'Bedrock'});
  
  console.log("***** Parents *****");
  console.log("1.", fred);
  console.log("2.", fred.speak());
  console.log("3.", wilma);
  console.log("4.", wilma.speak());
  
  function Child(childAttributes) {
    Parent.call(this, childAttributes); // binding to Parent
    this.isChild = childAttributes.isChild; // a special attribute to Child
  }
  

  Child.prototype.checkIfChild = function () {
    if(isChild) {
      return(`My name is ${name}.`);
      // \nAm I a Child?  ${pebbles instanceof Child}.\nAm I a Parent? ${pebbles instanceof Parent}.`;);
    }
  };
  
  const pebbles = new Child({'gender': 'Female', 'age': 3, 'name': 'Pebbles', 'homeTown': 'Bedrock'});
  
  console.log("***** Child *****");
  console.log("5.", pebbles);
  console.log("6.", pebbles.speak());
  console.log("7.", pebbles.checkIfChild());
  console.log("8.", pebbles.yabbaDabba());
  