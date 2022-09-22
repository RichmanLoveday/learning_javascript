// Output every second using set Interval
let printNumbers = (from, to) => {
    let current = from;
    let sec = () => {
        console.log(current)
        if(current == to) {
            clearInterval(timer);
        }
       current++;
    }
    sec();
    let timer = setInterval(sec, 1000);
    
}
// printNumbers(1, 10);

// Using nested setTimeout
let printNumbers2 = (from, to) => {
    let current = from;
    let timer = setTimeout(function sec() {
        console.log(current)
        if(current != to) {
            setTimeout(sec, 1000)
        } 
        current++;
    }, 1000)
}

// printNumbers2(1, 10);

let i = 0;
setTimeout(() => console.log(i), 100);
for(let j = 0; j < 10000000; j++) {
    i++;
}
