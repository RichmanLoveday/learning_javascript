// // cahnge the background color to red
// document.body.style.background = 'red';

// // Change back after 1 sec
// setTimeout(() => document.body.style.background = "", 3000);

// for(let i = 0; i < document.body.childNodes.length; i++) {
//     alert(document.body.childNodes[i]);
// }

// DOM collections
// childNodes
// for(let node of document.body.childNodes) {
//     alert(node);
//     console.log(node);
// }

// Siblings and parent

// parent node
// alert(document.body.parentNode === document.documentElement);

// after <head> goes <body>
// alert(document.head.nextSibling);

// before <body> goes <head>
// alert(document.body.previousSibling);

// Element-only navigation
// for(let elem of document.body.children) {
//     alert(elem);
//     console.log(elem);
// }

let td = table.rows[0].cells[1]
console.log(td);




