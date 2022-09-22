// Working with prototype
let animal = {
    jumps: null,
};
let rabbit = {
    __proto__: animal,
    jumps: true,
};
// console.log(rabbit.jumps);      // true
// delete rabbit.jumps;        // delete from the calling object not the prototype or inherited object
// console.log(rabbit.jumps);      // null
// delete animal.jumps;        // true
// console.log(animal.jumps);      // Undefined

// Searching algorithm
let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};
// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(head.glasses);

let animal2 = {
    eat() {
        this.full = true;
    },
};

let rabbit1 = {
    __proto__: animal2,
};
// rabbit1.eat();
// console.log(rabbit1.full);
// animal2.eat();
// console.log(animal2.full);

let hamster = {

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: [],
};

let lazy = {
    __proto__: hamster,
    stomach: [],
}
// speedy.eat('apple');
// console.log(speedy.stomach);
// console.log(lazy.stomach);

// Changing "prototype"
function Rabbit1() {}
Rabbit1.prototype = {
    eats: true
};


let rabbit3 = new Rabbit1();

// Rabbit1.prototype = {};
Rabbit1.prototype.eats = false
// delete rabbit3.eats
//delete Rabbit1.prototype.eats;
// console.log(rabbit3.eats);

// Add method "f.defer(ms)" to functions prototype
// Function.prototype.defer = function defer(ms) {
//     return setTimeout(this, ms);
// }
function f(a, b) {
    console.log(a + b);
}


Function.prototype.defer = function defer(ms) {
    let f = this;
    return function wrapper(...args) {
        setTimeout(() => {
            f.apply(this, args);
        }, ms);
    }
}
// f.defer(1000)(2, 1)

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join(',');
        }
    }
});
dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';
for(let key in dictionary) {
    console.log(key);
}


console.log(dictionary)






