// get id
let menu = document.getElementById('menu');
let lists = document.querySelectorAll('li');

// Adding span to each list
for(li of lists) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}


// add an event listener
menu.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.target)

    if(event.target.tagName != 'SPAN') return;
    let ul = event.target.parentElement.querySelector('ul');
    console.log(ul)
    if(!ul) return;
    ul.hidden = !ul.hidden
    console.log(ul.hidden);

    // let li = event.target;
    // console.log(li)

    // console.log(span)
    // li.append(span)

    // let span = event.target.closest('span');

    // if(!span) return;
    // let ul = span.nextElementSibling;
    // ul.classList.toggle('hide');
    // console.log(span)
    // console.log(span.nextElementSibling)
});