//getting the navbar and footer from the localstorage
let navbar = localStorage.getItem('navbar');
let footer = localStorage.getItem('footer');

//getting the header and footer tag to populate navbar and footer
const headerTag = document.querySelector('.header');
const footerTag = document.querySelector('.footer');

//parsing both
//checking the condition before parsing
// if null then redirect to homepage
if (navbar == null || footer == null) {
    document.location.href = '/html/home.html'
}
else {
    //parsing it so we can get dom element rather than a string
    navbar = JSON.parse(navbar)
    footer = JSON.parse(footer)
    //setting the inner html of header and footer
    headerTag.innerHTML = navbar
    footerTag.innerHTML = footer
}
