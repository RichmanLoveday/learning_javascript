


function makeCounter() {
    // Using closure to store curent count
    // let count = 0

    counter.count = 0;
    function counter() {
        return counter.count++;
    };

    // Method to set count value
    counter.set = (value) => {
        return counter.count = value;
    }

    // Method to decrease a counter count
    counter.decrease = () => {
        return counter.count--;
    }
    
    return counter;
} 



let counter = makeCounter();
counter.count = 20;
console.log(counter.count)
counter.set(25);
console.log(counter.count)
counter();
console.log(counter.count)
counter.decrease();
counter.decrease();
console.log(counter.count)
counter.set(100)
console.log(counter.count)
counter.decrease()
counter.decrease()
console.log(counter.count)
console.log(counter)
counter();
console.log(counter)

// Sum with an arbitrary amount of brackets
function sum(num) {
    let sum = num;
    function add(val) {
        sum += val;
        return add;
    }
    
    add.toString = function() {
        return sum;
    }
    return add;

}

console.log(sum(1)(2)(3).toString());

