for(let elem of document.body.children) {
    alert(elem);
    console.log(elem)
}

for(let node of document.body.childNodes) {
    alert(node);
    console.log(node)
}

// for div
console.log(document.body.childNodes[1]);
console.log(document.body.children);

// for ul
console.log(document.body.children[1]);
console.log(document.body.childNodes)
console.log(document.body.childNodes[3])

// for li
console.log(document.body.childNodes[3].children[1])
console.log(document.body.lastElementChild.lastElementChild)
// console.log(document.body.childNodes[2]);
// console.log(document.body.childNodes[3]);
// console.log(document.body.childNodes[5]);
// console.log(document.body.childNodes[0]);


