let hamburger;
hamburger = document.querySelector('.hamburger');
let navLinks;
navLinks = document.querySelector('.nav-links');
let links;
links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
});