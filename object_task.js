let user = {
    name : 'John',
    surname : 'Smith',
}

let user2 = {};

user.name = 'Pete';
delete user.name;
//console.log(user);

// function to check for emptyness of an object
function isEmpty(obj) {
    if(typeof(obj) == 'object') {
        for(let key in obj) {
            return true
        }
    }
    return false;
}
// console.log(isEmpty(user));
// console.log(isEmpty(user2));

// function to sum all numbers in an objects
function sum_num(obj) {
    if(typeof(obj) == 'object') {
        let sum_num = 0;
        for(let key in obj) {
            if(!isNaN(obj[key])) { 
                sum += obj[key];
            }
        }
        return sum_num;
    }
    return false;
}


// function that multiplies all numeric properties by 2

function multiplyNumeric(obj) {
    if(typeof(obj) == 'object') {
        for(let key in obj) {
            if(!isNaN(obj[key])) { 
                obj[key] = obj[key] * 2;
            }   
        }
        return obj;
    }
    return false;
}


let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130,
    Andrew : '78jj',
    
};

let menu = {
    with : 200,
    height : 300,
    title : 'My menu',
};

//console.log(sum_num(salaries));
// console.log(multiplyNumeric(menu));

let user3 = {
    name : 'John',
    go : function() {
        console.log(this.name);
    }
}

// user3.go();
// (user3.go)();



let user4, method;
user4 = {
    go : function() { console.log(this); }
};

// user4.go();
// (user4.go)();

// (method = user4.go)();
// (user4.go || user4.stop)();

function makeUser() {
    return {
        name: 'John',
        ref() {return this},
    };
};


let user5 = makeUser();
//console.log(user5.ref().name);

/* Creating a calculator with object */
let calculator = {
    num1 : null,
    num2 : null,
    read() {
        this.num1 = +prompt('Enter number one');
        this.num2 = +prompt('Enter number two');
    },

    sum() {
        let sumx = () => +this.num1 + +this.num2;
        return sumx();
    },

    mul() {
        let mul = () => this.num1 * this.num2;
        return mul();
    }
}

calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());


/* Chaining Objects */

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
    }
}

// ladder.up().up().showStep();

// Checking if two contructors are same with code below

function A(name, age) {
    this.name = name,
    this.age = age;
    return;
}

function B(name, age) {
    this.name = name,
    this.age = age;
    return;
}

let a = new A('richy', 22);
let b = new B('saviour', 22);
console.log(a === b);  // False

let obj = {};
function C() {
    return obj;
}

function D() {
    return obj;
}

let c = new C();
let d = new D();
// console.log( c == d); // true


// Using contructor to recreate a calculator

function Calculator() {
    this.val1 = null,
    this.val2 = null,

    this.read = () => {
        this.val1 = +prompt('Enter first number', 0);
        this.val2 = +prompt('Enter second number', 0);
    },

    this.mul = () => {
        return this.val1 * this.val2;
    },
    
    this.sum = () => {
        return this.val1 + this.val2;
    };

}

let calculator1 = new Calculator();
calculato1r.read();
alert("Sum: " + calculator1.sum());
alert("Mul: " + calculator1.mul());


// Creating an accumulator system

function Accumulator(startingValue) {
    this.startingValue = startingValue,
    this.currentVal = null,

    this.read = () => {
        this.value = +prompt("Enter a number", 0);
        this.currentVal = this.currentVal + this.value;
    }

    return this.currentVal += this.startingValue;
}

let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.currentVal);




