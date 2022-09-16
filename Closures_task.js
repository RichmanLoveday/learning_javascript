// Sum with closures
function sum(a) {
    return function(b) {
        return a + b;
    }
}
// console.log(sum(1)(2))
// console.log(sum(5)(-1))


// Filter through function
let arr = [1, 3, 5, 4, 5, 6, 7];

function inBetween(a, b) {
    return (x) => x <= b && x >= a;
}
console.log(arr.filter((inBetween(4, 5))))


function inArray(...arr) {
    return (x) => {
        return arr.includes(x);
    }
}
console.log(arr.filter(inArray(6, 2, 3, 3, 40)));

// Sort by field
// console.log(arr.sort())

let users = [
    {name: 'John', age: 20, surname: 'Johnson'},
    {name: 'Pete', age: 18, surname: 'Peterson'},
    {name: "Ann", age: 19, surname: 'Hathaway'},
];



function byField(str) {
    return (a, b) => {
        return (a[str] > b[str]) ? 1 : -1;
    }
}
// console.log(users.sort(byField('age')))
// console.log(users.forEach(user => console.log(user.name)))

function makeArmy(num) {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shoot = i;
        let shooter = () => {
            console.log(shoot);
        };
        shooters.push(shooter);
        i++;
    }
    console.log(shooters[1])
    return shooters;
}
let army = makeArmy();
army[0]();
army[0]();





