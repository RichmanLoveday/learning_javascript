let links = document.querySelectorAll('a');
for(let link of links) {
    let href = link.getAttribute('href');
    if(!href) continue;

    if(!href.includes('://')) continue;

    if(href.startsWith('http://internal.com/test')) continue;

    console.log(link);
    link.style.color = 'orange';
}

// let link2 = document.querySelectorAll('a[href*="://]:not(href)')