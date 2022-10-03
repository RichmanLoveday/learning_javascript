// Serching for id="age-table";
let form = document.querySelectorAll('body > form:last-of-type');
console.log(form);
let table = form[0].children[0];
console.log(table);
// Method 2
console.log(document.getElementById('age-table'))

// Searching for labels
let labels = document.getElementById('age-table').querySelectorAll('label')
console.log(labels);

// Searching for the first td
let td_first = table.querySelector('td');
console.log(td_first);

// Searching for the form with the name search
form = document.querySelector('form');
// first input
console.log(form.querySelector('input:first-child'))

// second input
console.log(form.querySelector('input:last-of-type'))