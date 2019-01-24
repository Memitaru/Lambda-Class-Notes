//Class Syntax

class Person {
    constructor(attributes) {
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
        this.phrase = attributes.phrase;
    }

    speak() {
        console.log(`${this.name} says ${this.phrase}`)
    }
}

const cameron = new Person({
    age: 31,
    name: 'Cameron',
    location: 'Utah',
    phrase: 'Shazam'
});

cameron.speak();

