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

// Searching: getElement, querySelector*
// getElemntById(id) meethod
// let elem = document.getElementById('elem');
// elem.style.background = 'red'

// querySelectorAll(css)
// let elements = document.querySelectorAll('ul > li');
// console.log(elements);
// for(let elem of elements) {
//     alert(elem.innerHTML);
//     console.log(elem.innerHTML);
// }

// let elements2 = document.querySelector('ul > li');
// console.log(elements2);
// for(let elem of elements2) {
//     alert(elem.innerHTML);
//     console.log(elem.innerHTML);
// }

// for(let elem of document.body.children) {
//     if(elem.matches('a[href$="zip"]')) {
//         alert("The archive reference: "+ elem.href)
//         console.log("The archive reference: "+ elem)
//     }
// }

// finding first ancestor with closet()
// let chapter = document.querySelector('.chapter');
// console.log(chapter.closest('.book'));
// console.log(chapter.closest('.contents'));
// console.log(chapter.closest('hi'));

// getElementsBy
// let divs = document.getElementsByTagName('div');
// for(elem of divs) {
//     alert(elem);
//     console.log(elem);
// }

// let inputs = table.getElementsByTagName('input');
// console.log(inputs)
// for(let input of inputs) {
//     alert(input.value + ': ' + input.checked);
//     console.log(input.value + ': ' + input.checked);
// }

// let inputs = document.getElementsByName('my-form')[0];
// let article = document.getElementsByClassName('article');
// console.log(inputs)
// console.log(article);
// console.log(article.length);

// // console.dir(document.body);
// // alert(document.body);
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Node);

// // Node types
// let elem = document.body;
// console.log(elem.nodeType);
// console.log(elem.firstChild.nodeType);
// console.log(document.nodeType);

// // nodeName and tagName
// console.log(document.body.nodeName);
// console.log(document.body.tagName);

// // comparing both
// //  for text or comment nodes
// console.log(document.body.firstChild.tagName);
// console.log(document.body.firstChild.nodeName);

// // for document
// console.log(document.tagName);
// console.log(document.nodeName);

// innerHTML: the contents
// document.body.innerHTML = 'The new BODY!';
// document.body.innerHTML = '<b>test';
// console.log(document.body.innerHTML);

// let form = document.querySelector('form').children;
// console.log(form);
// let chatDiv = form[1].innerHTML;
// form[1].innerHTML += '<div> Very Very Long article</div>';

// form = document.querySelector('form');
// form.outerHTML = '<p>A new Element</p>';
// // outerHTML: full HTML of the element
// console.log(form.outerHTML);

// // nodeValue/data: text node content
// let text = document.body.firstChild;
// console.log(text);
// console.log(text.data);

// let comment = text.nextSibling;
// console.log(comment);
// console.log(comment.data);

// textContent: pure text
// console.log(document.getElementById('news').textContent);
// let name = prompt("What's your name?", "<b>Winnie-the-pooh!</b>");
// elem1.innerHTML = name;
// elem2.textContent = name;
// console.log(elem1);
// console.log(elem2)

// // Hidden property
// setInterval(() => elem3.hidden = !elem3.hidden, 1000)

// Attributes and properties
// DOM properties
document.body.myData = {
    name: 'Caesar',
    title: 'Imperator',
};
// adding method 
document.body.sayTagName = function() {
    console.log(this.tagName);
};
console.log(document.body);
document.body.sayTagName();

Element.prototype.sayHi = function() {
    console.log(`Hello, I'm ${this.tagName}`);
}
document.documentElement.sayHi();


// HTML attributes

console.log(elem.getAttribute('ABout'));
elem.setAttribute('Test', 123);
console.log(elem.attributes);
for(let attr of elem.attributes) {
    console.log(`${attr.name} = ${attr.value}`);
}


// DOM prop are typed
console.log(input.getAttribute('checked'));
console.log(input.checked);

console.log(input.getAttribute('style'));
console.log(input.style);
console.log(input.style.color)

console.log(a.getAttribute('href'));
console.log(a.href);

// Non-standard attributes, dataset
let user = {
    name: "Pete",
    age: 25
};

console.log(document.querySelectorAll('[show-info]'));
for(let div of document.querySelectorAll('[show-info]')) {
    let field = div.getAttribute('show-info');
    console.log(field);
    div.textContent = user[field];
    console.log(div);
}

console.log(document.querySelector('[data-about]'));

console.log(order.dataset.orderState);
order.dataset.orderState = "pending";
console.log(order.dataset.orderState);
order.dataset.orderState = "canceled";
console.log(order.dataset.orderState);

// Modifying the document
// creating an element
let div1 = document.createElement('div');
console.log(div1);
let textNode = document.createTextNode('Here I am'); // creating text node

//  creating a message
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
console.log(div);

// Insertion methods
//document.body.append(div);
//document.body.prepend(div);
//document.body.before(div);
//document.body.after(div);
// document.body.replaceWith(div)

ol.before('before');
ol.after('after');

let lifirst = document.createElement('li');
lifirst.innerHTML = 'prepend';
ol.prepend(lifirst);

let lilast = document.createElement('li');
lilast.innerHTML = 'append';
ol.append(lilast);

// inserting multiple lists
div22.before('<p>Hello</p>', document.createElement('hr'));

// insertAdjacentHTML/Text/Element
document.getElementById('div24').insertAdjacentHTML('beforebegin', '<p>Hello</p>');
document.getElementById('div24').insertAdjacentHTML('afterbegin', '<p>Bye</p>');

// Alternative of creating alert
document.body.insertAdjacentHTML('afterbegin', `<div class="alert"> <strong>Hi there!</strong> You've read an impoortant message. `);

// Node removal
let div7 = document.createElement('div');
div7.className = "alert";
div7.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div7);
// setTimeout(() => div7.remove(), 1000);

second.after(first);

// Cloning nodes: cloneNode
let div2 = div7.cloneNode(true);
console.log(div2);
div2.querySelector('strong').innerHTML = 'Bye there!';
div7.append(div2);


// DocumentFragment
// function getListContent() {
//     let fragment = new DocumentFragment();

//     for(let i = 1; i <= 3; i++) {
//         let li = document.createElement('li');
//         //li.append(i);
//         fragment.append(li);
//     }
//     return fragment;
// }

// ul.append(getListContent());

function getListContent() {
    let result = [];

    for(let i=1; i <= 3; i++) {
        let li = document.createElement('li');
        li.append(i);   
        result.push(li);
    }
    return result;
}

// ul.append(...getListContent());

// Document.write
let p_tag = document.getElementById('p_tag');
console.log(p_tag.innerHTML )
// document.write('<b>Hello from JS</b>')
// setTimeout(() => document.write('<b>Hello from JS</b>'), 1000)

// Styles and classes
// className 
let test_class = document.getElementById('test_class');
console.log(test_class.className);

// classList
test_class.classList.add('article')
test_class.classList.toggle('article')
test_class.classList.remove('article')

console.log(test_class.classList.contains('main'))
console.log(test_class.classList);
console.log(test_class.className);


// Element style
// document.body.style.backgroundColor = prompt('background color?', 'green');
// console.log(document.body.style.backgroundColor)


// Resetting the style property
// document.body.style.display = 'none';
// setTimeout(() => document.body.style.display = '', 1000)


// style.cssText
// test_class.style.cssText = `color: red !important;
//     background-color: yellow;
//     width: 100px;
//     text-align: center;
// `;
// console.log(test_class.style.cssText);

// Computed styles: getComputedStyle
let example = document.getElementById('example');
// let computedStyle = getComputedStyle(example);
// console.log(computedStyle.marginTop)
// console.log(computedStyle.padding)
// console.log(computedStyle.height)

// Element size and scrolling
// console.log(example.offsetParent.id);
// console.log(example.offsetLeft);
// console.log(example.offsetTop);

//example.style.height = `${example.scrollHeight}px`
// console.log(example.scrollTop = 0);console.log(example.scrollHeight);

// Introduction t browser Events
// Handlers
function countRabbits() {
    for(let i = 1; i<=3; i++) {
        alert("Rabbit number " + i)
    }
}

// DOM property
click.onclick = function() {
    alert("Thank you")
};

//  removing a handler
click.onclick = null

// Accessing the element: this
click2.onclick = function() {
    alert(this.innerHTML);
}


// addEventListener
click3.onclick = () => alert("Hello");
console.log(click3)
click3.addEventListener('click', countRabbits);

click4.ontransitionend = function() {
    alert('DOM property');
};

click4.addEventListener('transitionend', function() {
    alert('addEventListener');
});

click5.onclick = function(event) {
    console.log(event)
    console.log(`${event.type} at ${event.currentTarget}`);
    console.log(`Coordinates: ${event.clientX}: ${event.clientY}`);
}

// Object handlers: handleEvent
click6.addEventListener('click', {
    handleEvent(event) {
        console.log(`${event.type} at ${event.currentTarget}`);
    }
});

// using a class
class Menu {
    handleEvent(event) {
        console.log(event)
        switch(event.type) {
            case 'mousedown':
                click7.innerHTML = "Mouse button pressed";
                break;
            case 'mouseup':
                click7.innerHTML += "....and released.";
                break;
        }
    }
}
let menu = new Menu();
click7.addEventListener('mousedown', menu);
click7.addEventListener('mouseup', menu);


class Menu2 {
    handleEvent(event) {
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        console.log(method)
        this[method](event);
    }

    onMousedown(event) {
        console.log(event)
        click8.innerHTML = "Mouse button pressed";
    }

    onMouseup(event) {
        console.log(event)
        click8.innerHTML += "...and released.";
    }
}

let menu2 = new Menu2();
click8.addEventListener('mousedown', menu2);
click8.addEventListener('mouseup', menu2);

// Bubbling and capturing
// Delegation

let selectedTd;
// table.onclick = function(event) {
//     console.log(event)
//     let target = event.target;

//     if(target.tagName != 'TD') return;

//     highlight(target);

// };

table.onclick = function(event) {
    console.log(event)
    let td = event.target.closest('td');
    console.log(td);
    console.log(table)

    if(!td) return;
    
    if(!table.contains(td)) return;

    highlight(td);

};


function highlight(td) {
    if(selectedTd) {
        selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight');
}


// creating object and methods with delegation
class Menu3 {
    constructor(elem) {
        console.log(elem)
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
        console.log(elem.onClick)
    }

    save() {
        console.log('saving');
    }

    load() {
        console.log('loading');
    }

    search() {
        console.log('searching');
    }

    onClick(event) {
        let action = event.target.dataset.action;
        console.log(action);
        if(action) this[action]();
    };
}

new Menu3(document.getElementById('menu44'));


document.addEventListener('click', (event) => {
    console.log(event);
    if(event.target.dataset.counter != undefined) event.target.value++;
})

// Browser default actions
// menu5.onClick = function(event)  {
//     console.log(event)
//     //if(event.target.nodeName != 'A') return;

// };

context_menu.oncontextmenu = (event) => {
    console.log(event)
    event.preventDefault();
    event.stopPropagation();
    console.log("Button context menu");
};

document.oncontextmenu = (event) => {
    console.log(event);
    if(event.defaultPrevented) return;
    event.preventDefault();
    console.log("Document context menu");

}


function handler() {
    alert( "..." );
    return false;
}
