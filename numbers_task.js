// Numbers Data Type Tasks
// sum numbers from the visitors

// let num1 = parseFloat(prompt('Enter first number', 0));
// let num2 = parseFloat(prompt('Enter second number', 0));
// let sum = +num1.toFixed(2) + +num2.toFixed(2);
// alert('Answer = ' + sum);

// A random number from min to max not including max
function random(min, max) {
    let minus = max - min;
    return min + Math.random() * minus;
}

//console.log(random(1, 10));


// A random integer form min to max
function randomInteger(min, max) {
    let randomNum = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(randomNum);
}
console.log(randomInteger(1, 5));