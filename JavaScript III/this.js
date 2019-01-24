const myObj = {
    greeting: "Hello",
    speak: function() {
        console.log("implicit this ==== ", this);
        return `${this.greeting}, world!`;
    }
}

myObj.speak();

function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        console.log(`This new binding: `, this)
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const ryan = new Person({name: "Ryan", age: 32});

ryan.speak();

const haynes = new Person({name: "Haynes", age: "8 months"});

haynes.speak();

ryan.speak.call(haynes);
ryan.speak.apply(haynes); //apply can take an array of arguements


