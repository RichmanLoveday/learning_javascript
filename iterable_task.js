// Filter unique array members
function unique1(arr) {
    let set = new Set(Array.from(arr));
    return set;
}

function unique(arr) {
    let result = [];
    for(let index = 0; index <= arr.length; index++) {
        if(!result.includes(arr[index])) {
            console.log(arr[index]);
            result.push(arr[index]);
        }
    }
    return result;
}

//console.log(unique1(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));


function aclean(arr) {
    let map = new Map();
    for(let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
        //let set = new Set(Array.from(map));
    }
    return Array.from(map.values());
    
}

// console.log(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));

let map = new Map();
map.set('name', 'John');
console.log(map);
let keys = Array.from(map.keys());

keys.push('more');
console.log(keys);


// Store 'unread' flags

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'How goes?', from: 'John'},
    {text: 'See you soon', from: 'Alice'}
];

// Adding a unique symbol
let isRead = Symbol('isRead');
let weak = new WeakSet();
for(message of messages) {
    message[isRead] = true;
    weak.add(message);
}


// console.log(weak);
// console.log('Is message read' + weak.has(messages[2]));

// Sum the properties 
let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250
};


function sumSalaries(salaries) {
    let sum = 0;
    let values = Object.values(salaries);
    for(let salary of values){
        sum += salary;
    }
    return sum;
}

// second method
function sumSalaries2(salaries) {
    let values = Object.values(salaries);
    let result = values.reduce((sum, element) => sum + element, 0);
    return result;

}
console.log(sumSalaries2(salaries));


