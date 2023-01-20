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
    if (url == 'learningpacks'){
        //adding the active class to anchor tag
        linkTag[2].classList.add('active')
        
    }
    
    else if (anchor_href == url){
        //adding the active class to anchor tag
        element.classList.add('active')
        
        if ('contact.html' == url){
            element.classList.add('active_button')
        }
    }
}


//asidebar active navigator functionality
//getting the page name or file name from the url
let currentNavigator = document.location.href.split("/")
currentNavigator = currentNavigator[6]

//getting the link tags in the form of array
let currentNavigatorTag = document.querySelectorAll("#leftNavigation .navigators .dropdownContent ul a");
let liTag = document.querySelectorAll("#leftNavigation .navigators .dropdownContent ul a li");

//iterating through the linkTag Array
for (let index = 0; index < currentNavigatorTag.length; index++) {
    const element = currentNavigatorTag[index];
    const li = liTag[index];
    
    
    //getting only filename from the url
    const anchor_href = element.href.split("/")[6];
    //checking condition whether the both the filenames are equal or not
    if (anchor_href === currentNavigator) {
        //adding the active class to anchor tag
        li.classList.add('activeGuide')
    }
}

let dropDownTag = document.querySelectorAll("#leftNavigation .navigators .dropdown>p");
let gsce_11_primary_year7_9 = document.location.href.toString()
for (let index = 0; index < dropDownTag.length; index++) {
    if (gsce_11_primary_year7_9.includes('11+')){
        dropDownTag[0].classList.add('activeDropDownMenu')
        dropDownTag[1].classList.remove('activeDropDownMenu')
        dropDownTag[2].classList.remove('activeDropDownMenu')
        dropDownTag[3].classList.remove('activeDropDownMenu')
    }
    else if (gsce_11_primary_year7_9.includes('gcse')) {
        dropDownTag[0].classList.remove('activeDropDownMenu')
        dropDownTag[1].classList.add('activeDropDownMenu')
        dropDownTag[2].classList.remove('activeDropDownMenu')
        dropDownTag[3].classList.remove('activeDropDownMenu')
    }
    else if (gsce_11_primary_year7_9.includes('primary') ){
        dropDownTag[0].classList.remove('activeDropDownMenu')
        dropDownTag[1].classList.remove('activeDropDownMenu')
        dropDownTag[2].classList.add('activeDropDownMenu')
        dropDownTag[3].classList.remove('activeDropDownMenu')
    }
    else if (gsce_11_primary_year7_9.includes('year7-9')) {
        dropDownTag[0].classList.remove('activeDropDownMenu')
        dropDownTag[1].classList.remove('activeDropDownMenu')
        dropDownTag[2].classList.remove('activeDropDownMenu')
        dropDownTag[3].classList.add('activeDropDownMenu')
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



const dropDown = document.querySelectorAll('.dropdown');
const dropDownIcon = document.querySelectorAll('.dropdown figure img')
const dropDownContent = document.querySelectorAll('.dropdownContent')
dropDown.forEach((element,index)=>{
    let count = 0
    element.addEventListener('click', () => {
        if (count == 0) {
            dropDownIcon[index].classList.remove('moveUp')
            dropDownIcon[index].classList.add('moveDown')
            setTimeout(()=>{
                dropDownContent[index].style.display = 'block'
            },150)
            count = 1
        }
        else if (count == 1) {
            dropDownIcon[index].classList.remove('moveDown')
            dropDownIcon[index].classList.add('moveUp')
            setTimeout(() => {
                dropDownContent[index].style.display = 'none'
            }, 150)
            count = 0
        }
    })
})
    

let fileLocation = document.location.href.split("/")
fileLocation = fileLocation[4]


if(fileLocation == 'learningpacks'){
    let headerLogo = document.querySelector("header .navbar ul>figure>img");
    headerLogo.src = '../../../images/home/logo.svg'


    let all_links = document.querySelectorAll(".links")
    let linkCount = 0
    all_links.forEach((element, index) => {

        if (linkCount == 9) {
            linkCount = 0
        }
        else if (index == linkCount) {
            element.href = element.toString().replace('/html/learningpacks', '')
            linkCount += 1
        }

    })

    let images = document.querySelectorAll("footer nav ul img");
    images.forEach(element => {
        let str = element.src.toString()
        let strIndex = str.indexOf('/html') + 19
        let path = element.src.toString().slice(strIndex,)
        path = '../../..' + path
        element.src = path
    })
}


