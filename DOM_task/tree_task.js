let ul = document.querySelector('ul').children;
//console.log(ul);
for(let index = 0; index <= ul.length - 1; index++) {
    // console.log(index);

    // print first text data of li and lengths
    let text_data = ul[index].firstChild.data;
    let li_length = ul[index].querySelectorAll('li').length;
    alert(`${text_data}:${li_length}`)
    console.log(`${text_data}:${li_length}`);


    //console.log(ul[index].children[0].children);
    // Access the elments by index and get it children
    let inner_ul = ul[index].children[0].children;
    // console.log(inner_ul)

    // loop throught the inner ul
    for(let inner_li of inner_ul) {

        // get the first child, data and lenght
        text_data = inner_li.firstChild.data;
        li_length = inner_li.querySelectorAll('li').length;

        // Print the next list data and numbers
        alert(`${text_data}:${li_length}`);
        console.log(`${text_data}: ${li_length}`);

        // Get the final list, data and length
        inner_li.querySelectorAll('li').forEach((ele) =>{ alert(`${ele.innerHTML}: ${ele.children.length}`); console.log(`${ele.innerHTML}: ${ele.children.length}`)}); 

        //console.log(inner_li.querySelectorAll('li'));
        // console.log(last_length)

       // console.log(`${text_data}:${li_length}`);
        
    }
  
}


let lists = document.querySelectorAll('li');

// console.log(lists)

// for(let list of lists) {
//     let title = list.firstChild.data;
//     alert(`${title}: ${list.getElementsByTagName('li').length}`);
// }

