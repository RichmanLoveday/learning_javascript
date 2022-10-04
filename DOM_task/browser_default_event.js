let contents = document.getElementById('contents');
//console.log(contents)
contents.onclick = (event) => {
    //console.log(event)

    // function to handle links
    function handleLink(href) {
        let request = confirm(`Do you want to leave to ${href}`);
        if(!request) {
            // console.log(conatiner_link)
            event.preventDefault();
           // console.log(event.defaultPrevented)
        }
    }

    // target link
    let link = event.target;
    
    if(link.tagName != 'A' && link.tagName != 'I') return;

    // get the closest a tag
    let conatiner = link.closest('a');
    link = conatiner.getAttribute('href')
    // console.log(link)
    // condition to prevent default 
    handleLink(link);

}

