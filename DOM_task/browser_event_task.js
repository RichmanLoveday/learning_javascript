let appear = document.getElementById('appear');
let text = document.getElementById('text');
text.innerHTML = 'Text';
//console.log(text);

appear.addEventListener('click', function() {
    text.hidden = true;
})

let menu = document.getElementById('menu');
// let links = document.getElementById('menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('open');
})

// let message = document.getElementById('message');
// message.insertAdjacentHTML('afterbegin', '<div class="close_btn">[x]</div>');
// message1.insertAdjacentHTML('afterbegin', '<div class="close_btn">[x]</div>');
// message2.insertAdjacentHTML('afterbegin', '<div class="close_btn">[x]</div>');
// console.log(message)

// // adding event listener to remove the div element
// message.firstChild.onclick = () => message.remove();
// message1.firstChild.onclick = () => message1.remove();
// message2.firstChild.onclick = () => message2.remove();




// Using delegation to delete notification
let message = document.getElementById('message');
console.log(message);
// adding closing button to the elements
for(child of message.children) child.insertAdjacentHTML('afterbegin', '<div class="close_btn">[x]</div>');

message.addEventListener('click', (event) => {
    console.log(event)
    let target = event.target;
    //console.log(target)
    let close_btn = target.classList.contains('close_btn');
    
    // removing parent element -> message
    if(!close_btn) return;
    target.closest('div').parentElement.remove();
    // console.log(close_btn)
});


