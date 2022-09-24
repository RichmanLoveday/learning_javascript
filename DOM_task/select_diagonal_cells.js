
// console.log(document.body.children[0])
let index = 0;
for(let elem of document.body.children[0].rows) {
    console.log(elem.cells[index].style.backgroundColor = 'red')
    console.log(index)
    index++;
}