// createTextNode / innerHTML / textContent
function clear(elem_id) {
    let element = document.getElementById(elem_id);
    console.log(element.children);
    element.remove();
    // element.removeChild(element.children[0]);
    // element.removeChild(element.children[0]);
}
clear('elem');

console.log(table)

// function createList() {
    
//     while(true) {
//         let input = prompt('Enter your Items');
//         let arr = [];
//         if(!input) break;
//         let item_id = document.getElementById('items');

//         item_id.append(document.createElement('li'));
//         item_id.lastElementChild.textContent = input;
//         // console.log(item_id.lastElementChild.innerHTML);
//         // console.log(item_id.lastElementChild.textContent);

//         //item_id.insertAdjacentText('afterbegin', `<li> ${input} </li>`);
//         // console.log(item_id);
//     }
// }
//createList();

// Creating a tree from the object
let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
        "sequoia": {},
        "oak": {}
        },

        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};

// function createTree(data) {
    
    
//     let container = 'container';
//     // console.log(container)
//     container = document.getElementById(container);
//    console.log(container)
//    let index = 0;
//     for(let branch in data) { 

       
        

//         if(data[branch]  instanceof Object && Object.keys(data[branch]).length != 0) {
//             //console.log(container)
//             let li = document.createElement('li');
//             li.innerHTML = `${branch}`
//             console.log(li);

//             console.log(index);
//             console.log(data[branch])
//             index++;
            
//         }

//         createTree(data[branch])
        
       
//     }

//     // Object.keys(data).forEach((element) => {

//     //     console.log(`${element} : ${data[element]}`)
//     //     if(data[element] instanceof Object) console
//     // })
// }

// createTree(data);



function createDomTree(data) {
    
    if(data instanceof Object && Object.keys(data).length == 0) return;

    let ul = document.createElement('ul');
    for(let branch in data) {
        //console.log(data[branch]);
        let li = document.createElement('li');
        //console.log(li.getOwnPropertyNames())
        li.innerHTML = branch;

        let childrenUL = createDomTree(data[branch]);
        if(childrenUL) {
            //console.log(childrenUL)
            li.append(childrenUL)
        // console.log(childrenUL)
        }
        
        ul.append(li);
    }
     
 
    console.log(ul)
    return ul;
    //createDomTree(data[branch])

    // Object.keys(data).forEach((element) => {

    //     console.log(`${element} : ${data[element]}`)
    //     if(data[element] instanceof Object) console
    // })
}


function createTree(container, obj) {
    //console.log(container)
   // console.log(createDomTree(obj))
    container.append(createDomTree(obj))
}



let container = document.getElementById('container')
createTree(container, data)

// container.append(createDomTree(data));


function createCalender(elem, year, month) {

  
    // creating table
    let table = `<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th>`;

    let date = new Date(year, month - 1);
    console.log(getDay(date));
    let mon = date.getMonth();
    let day = date.getDate();

    // matching the day to the weekday in calender
    for(let index = 0; index < getDay(date); index++) {
        table += `<td></td>`
    }

    while(mon) {
        table += `<td> ${date.getDate()} </td>`;

        if(getDay(date) % 7 == 6) {
            table += `<tr></tr>`;
        }

        date.setDate(date.getDate() + 1)
    }

    if(getDay(date) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

      // close the table
      table += '</tr></table>';

    elem.innerHTML = table;
    console.log(mon)
    console.log(table)
    




    
    
    
    
    // console.log(table)
    // console.log(day)
    // console.log(mon)

   
    // console.log(date)
   
}


function getDay(date) {
    let day = date.getDay();
    console.log(day)


    if(day == 0) day = 7;
    
    return day - 1;
    
}




createCalender(document.getElementById('calender'), 2012, 9);