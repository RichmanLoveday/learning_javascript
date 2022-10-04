let largeImage = document.getElementById('largeImg');
let thumbs = document.getElementById('thumbs');


console.log(largeImage)


thumbs.onclick = (event) => {
    // target the click event
    let target = event.target.closest('a');
    
    if(!target) return;

    // stop link access
    event.preventDefault();
    console.log(target);

    // add class list
   // target.classList.add('smallImg')

    // get small image src link
    let href = target.getAttribute('href');
    console.log(href)

    swapImg(href, target);

}

function swapImg(href, target) {
    // add class list
    // largeImage.classList.add('largeImg')

    // get large image src
    let largeImg_src = largeImage.getAttribute('src');
    console.log(largeImg_src)
    // set attriubute for large image
    largeImage.src = href;

    // set attribute for small image
    target.setAttribute('src', largeImg_src);

}



// let largeImage = document.getElementById('largeImg');
// let thumbs = document.getElementById('thumbs');


// console.log(largeImage)


// thumbs.onclick = (event) => {
//     // target the click event
//     let target = event.target;
    
//     if(target && target.nodeName != 'IMG') return;

//     // stop link access
//     event.preventDefault();
//     console.log(target);

//     // add class list
//     target.classList.add('smallImg')

//     // get small image src link
//     let smallImg_src = target.getAttribute('src');
//     console.log(smallImg_src)

//     swapImg(smallImg_src, target);

//     function swapImg(src, target) {
//         // add class list
//         largeImage.classList.add('largeImg')

//         // get large image src
//         let largeImg_src = largeImage.getAttribute('src');
//         console.log(largeImg_src)
//         // set attriubute for large image
//         largeImage.setAttribute('src', src);

//         // set attribute for small image
//         target.setAttribute('src', largeImg_src);

//     }


// }