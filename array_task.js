// let fruits = ['Apple', 'Pear', 'Orange'];
// let shoppingCart = fruits;
// shoppingCart.push('Banana');
// console.log(fruits.length);

// /*1. Create an array styles with items “Jazz” and “Blues”.
// 2. Append “Rock-n-Roll” to the end.
// 3. Replace the value in the middle by “Classics”. Your code for finding the middle value should
// work for any arrays with odd length.
// 4. Strip off the first value of the array and show it.
// 5. Prepend Rap and Reggae to the array.*/

// let arr = ['Jazz', 'Blues'];
// console.log(arr);
// arr.push('Rock-n-Roll');
// console.log(arr);
// arr[Math.floor((arr.length - 1) / 2)] = "Classics";
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('Rap', 'Reggae');
// console.log(arr);
// arr.unshift('Rap1', 'Reggae1');
// console.log(arr);
// arr[Math.floor((arr.length - 1) / 2)] = "Classics";
// console.log(arr);


// // calling an array context
// let arr2 = ['a', 'b'];
// arr2.push(function() {
//     console.log(this);
// });
// arr2[2]();
// console.log(arr2);


// Sum inputs numbers

/*
    Write the function sumInput() that:
    Asks the user for values using prompt and stores the values in th
    Finishes asking when the user enters a non-numeric value, an em
    “Cancel”.
    Calculates and returns the sum of array items.
    P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/
// solution
function sumInput() {
    let inputs = [];
    for(let index = 0; index <= inputs.length; index++) {
        let value = prompt('Enter a number');

        if(isNaN(value) || value === null) {
            inputs[index] = null;
            let sum = 0;
            for(let item of inputs) {
                sum += item;
                //console.log(sum);
            } 
            // console.log(sum);
            return sum;
        }
        inputs[index] = +value;
    }
}
//alert(sumInput());


// Translate border-left-width to borderLeftWidth

function camelize(str) {
    let index = 0;
    let pos = 0;
    let target = '-';
    let positions = [];

    while(true) {
        let foundPos = str.indexOf(target, pos);
        //console.log(foundPos);
        if(foundPos == -1) break;   
        positions[index] = foundPos;
        index += 1;
        pos = foundPos + 1;
    }
    
    //console.log(positions);
    for(num of positions) {
        // console.log(num);
        let upper_case = str[num + 1].toUpperCase();
        str = str.replace(str[num + 1], upper_case);
      //  console.log(str);
    }
    str = str.split('-').join('');

    return str;
}

// function camelize2(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }

//console.log(camelize('bor-der-left-width'));
// console.log(camelize('-webkit-transition'))
// console.log(camelize('-background-c-olor'));
// console.log(camelize('webkittransition'));

let arr = [5, 3, 8, 1];

// Filter an array with out modifying the array
function filterRange(arr, a, b) {
    let filtered = arr.filter((item) => (item >= a && item <= b));
    return filtered;
}

// Method one to filter an index out
function filterRangeIndex(arr, a, b) {
    arr.map((item, index) => (item >= a && item <= b) ? arr.splice(index, 1) : '');
    return true;
}

// Method two to filter an index out
function filterRangeIndex2(arr, a, b) {
    let index = 0;
    for(index; index <= arr.length; index++) {
        if(arr[index] <= b && arr[index] >= a) {
            arr.splice(index, 1);
        }
    }
    return true;
}


//Method one
let filteredIndex = filterRangeIndex(arr, 1, 2);
//console.log(arr);      // [ 5, 3, 8 ]

//Method 2
let filteredIndex2 = filterRangeIndex2(arr, 1, 3);
// console.log(arr);   // [ 5, 8 ]
// console.log(arr.length);    // 2

// Sort array in decreaing order
let arr2 = [5, 2, 1, -10, 8];

function sortArr(arr) {
    return arr.sort((a, b) => (a < b) ? 1 : (a == b) ? 0 : -1);
}

// console.log(sortArr(arr2));       // [ 8, 5, 2, 1, -10 ]

// Copy and sort array
let arr3 = ['HTML', 'JavaScript', 'CSS'];
function copySorted(arr) {
    let copy = arr.slice(0).sort((a, b) => (a > b) ? 1 : (a == b) ? 0 : -1);
    return copy;
}
// console.log(copySorted(arr3));  // [ 'CSS', 'HTML', 'JavaScript' ]
// console.log(arr3);      // [ 'HTML', 'JavaScript', 'CSS' ]


// Creating extendable calculator

function Calculator() {

    this.methods = {
        '+': '+',
    };

    this.calculate = (str) => {

        console.log(str);
        if(str.slice(-1) == '+' || str.slice(-1) == ' ') {
            return 'Error';
        }
        
        // loop through the string 
        let arr = str.split(/[+*/**]/);
        arr.map((item, index) => (!Number(item)) ? arr.splice(index, 1): '');
        // console.log(arr);
        return addVal(arr, '++');

        return calculate(str);
    };

    this.cal = (arr = [], operator) => {
        // console.log(arr);
        let result = 0;
        arr.forEach(item => {
    
        if(operator == '+') {
            result += Number(item);
        }

        });
        //console.log(typeof(result))
        return result;
    }


    this.addMethod = (operator, func) => {
        
    }
}





let calc = new Calculator();
console.log(calc.calculate('3 ++ 5'));

