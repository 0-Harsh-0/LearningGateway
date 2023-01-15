//getting the page name or file name from the url
let url = document.location.href.split("/")
url = url[4]


//getting the link tags in the form of array
let linkTag = document.querySelectorAll("header nav ul div .links");

//iterating through the linkTag Array
for (let index = 0; index < linkTag.length; index++) {
    const element = linkTag[index];
    //getting only filename from the url
    const anchor_href = element.href.split("/")[4];

    //checking condition whether the both the filenames are equal or not
    if (anchor_href == url){
        //adding the active class to anchor tag
        element.classList.add('active')
        
        if ('contact.html' == url){
            element.classList.add('active_button')
        }
    }
    
}


//getting the required dom elements for showing and hiding the navigation
const hamburger = document.querySelector('.hamburgerContainer');
const navigationBar = document.getElementById('navigation');
const backBtn = document.getElementById('backBtn');

//adding click event on hamburger
hamburger.addEventListener('click', () => {
    //removing the class
    navigationBar.classList.remove('hideNavigation');
    //setting the display to flex
    navigationBar.style.display = 'flex';
    //adding the class
    navigationBar.classList.add('showNavigation');
    //setting the display to none
    hamburger.style.display = 'none'
})

backBtn.addEventListener('click', () => {
    //removing the class
    navigationBar.classList.remove('showNavigation');
    //adding the class
    navigationBar.classList.add('hideNavigation');
    //setting the dispaly to block
    hamburger.style.display = 'block'
    //this will run after 500millisecond
   setTimeout(() => {
       //setting the display to none after hiding the navigation
       navigationBar.style.display = 'none';
   }, 500);
})
    

