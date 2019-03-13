//Class Syntax

// class Person {
//     constructor(attributes) {
//         this.age = attributes.age;
//         this.name = attributes.name;
//         this.location = attributes.location;
//         this.phrase = attributes.phrase;
//     }

//     speak() {
//         console.log(`${this.name} says ${this.phrase}`)
//     }
// }

// const cameron = new Person({
//     age: 31,
//     name: 'Cameron',
//     location: 'Utah',
//     phrase: 'Shazam'
// });

// cameron.speak();

//base class

class Animal {
    constructor (attributes) {
        this.name = attributes.name;
    }

    getName(){
        return this.name;
    }
}

class Mammal extends Animal{
    constructor(attributes) {
        super(attributes);
        this.hasHair = attributes.hasHair;
    }

    getHasHair(){
        return this.hasHair;
    }
}

const sloth = new Mammal({
    name: 'Sid',
    hasHair: true
})

console.log(sloth);

console.log(sloth.getHasHair());

console.log(sloth.getName());

class Ardvark extends Mammal {
    constructor(attributes) {
        super(attributes);
        this.antLimit = attributes.antLimit;
    }
    getAntLimit(){
        return this.antLimit;
    }
}

const arthur = new Ardvark({
    name: 'Arthur',
    hasHair: true,
    antLimit: 100000
})

console.log(arthur.getName())
console.log(arthur.getAntLimit());


// arrow  functions and this

const cat = {
    name: 'suki',
    sayName: () => {
        console.log(this.name);
    }
}

cat.sayName();

