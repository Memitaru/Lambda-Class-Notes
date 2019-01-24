function Fruit(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
}

Fruit.prototype.speak = function(destination) {
    console.log(`Shipping this ${this.name} to ${destination}.`)
}

const banana = new Fruit({
    type: "tree", 
    name: "banana", 
    isRipe: true, 
    calories: 100
});

console.log(banana.speak("Hawaii"));