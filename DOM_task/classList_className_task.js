function showNotification({top = 0, right = 0, className, html}) {

    /* your code */
    let notification = document.createElement('div');
    document.body.append(notification)
    notification.className = 'notification';

    if(className) {
        notification.classList.add(className)
    }
    notification.innerHTML = html
    notification.style.top = top
    notification.style.right = right
    
    setTimeout(() => notification.remove(), 1500)
}
// test it
let i = 1;
setInterval(() => {showNotification({top: 10, right: 10, html: `Hello ${i++}`, className: 'welcome'})}, 2000);



// function showNotification(options) {
//     let div = document.createElement('div');
    
//     // crating a class name for div 
//     div.className = 'notification';
//     document.body.append(div);
//     console.log(div);

//     for(let option in options) {
//         console.log(option)

//         // Adding the notification message to the div
//         if(option == 'html') {
//             console.log(div.innerHTML = options[option])
//         }

//         if(option == 'top') {
//             div.style.top = options[option]
//         } 
        
//         if(option == 'right') {
//             div.style.right = options[option]
//         }


        
        
//         console.log(div.style)




        
//     }


// }

// showNotification({
//     top: 30,
//     right: 10,
//     html: "Hello!",
//     className: 'welcome',
// })


// console.log(option)

//         // Adding the notification message to the notification
//         if(option == 'className') {
//            notification.classList.add(options[option]);
//            console.log(notification.classList)
//         }

//         // console.log()
//         if(option == 'top') {
//             notification.style.top = `'${options[option]}'`
//         } 
        
//         if(option == 'right') {
//             notification.style.right = `'${options[option]}'`;
//         }
        

//         if(option == 'html') {
//             notification.innerHTML = options[option]  
//         }
        
//         console.log(option)
//        // console.log(div.style)

