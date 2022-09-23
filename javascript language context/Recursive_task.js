// Sum all numbers till the given one
function sumTo(num) {
    if(num == 1) {
        console.log(num)
        return num;
    } else {
       // console.log(num)
        let sum = num + sumTo(num - 1);
        //console.log(sum)
        return sum;
    }
}
//.log(sumTo(20))

// Loop
function sumTo2(num) {
    let sum = 0;
    for(num; num >= 1; num--) {
        sum += num;
    }
    return sum;
}

//console.log(sumTo(1000));

// Calculating factorial
function factorial(n) {
    if(n == 1) return n;
    n = n * factorial(n - 1);
    return n;
}
console.log(factorial(10));

// Fibonacci numbers
function fib(n) {
    if(n == 1 || n == 0) return n;
    n = fib(n - 1) + fib(n - 2);
    return n;
}
console.log(fib(7))