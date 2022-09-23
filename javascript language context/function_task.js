function checkAge(age) {
    if(age > 18) {
        return true;
    }
    return confirm('Did parent allow you?');
}

checkAge(77)
// using ternary condition ?
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// returns least num
function min(num1, num2) {
    return (num1 < num2) ? num1 : num2; 
}
//console.log(min(55, 55));

/* function for a power of num */
function pow(num1, num2) {

    let result = num1;
    for(let inc = 1; inc <= num2; inc++) {
       result = result * num1;
    }
    return result;

}

// let num1 = prompt('Enter first num', 0);
// let num2 = prompt('Enter first num', 0);
//alert(pow(num1, num2));

console.log(pow(2, 100));

/* Arrow function Tasks */
let ask = (question, yes, no) => { 
    (confirm(question)) ? yes() : no()
}

ask(
    'Do you agree.?',
    () => alert("You agreed. "), () => alert("You canceled the execution.")
);

