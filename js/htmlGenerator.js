const navbarHTML = `
 <nav class="navbar">
            <ul>
                <!-- logo begin -->
                <figure>
                    <img src="../images/home/logo.svg" alt="">
                </figure>
                <!-- logo end -->

                <!-- hamburger begin -->
                <div class="hamburgerContainer">
                    <div class="hamburger grid">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <!-- hamburger end -->

                <!-- page links begin -->
                <div id="navigation" class="flex justifyEnd alignCenter">
                    <li class="flex justifyEnd alignEnd">
                        <button class="back" id="backBtn">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928931C10.9526 0.538407 10.3195 0.538407 9.92893 0.928931C9.53841 1.31946 9.53841 1.95262 9.92893 2.34314L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM8.74228e-08 9L17 9L17 7L-8.74228e-08 7L8.74228e-08 9Z"
                                    fill="white" />
                            </svg>
                            &nbsp; Back
                        </button>
                    </li>

                    <a href="../html/home.html" class="links poppins">
                        <li data-text="Home">Home</li>
                    </a>
                    <a href="../html/about.html" class="links poppins">
                        <li data-text="About Us">About Us</li>
                    </a>
                    <a href="../html/learnings.html" class="links poppins">
                        <li data-text="Our Learning Resources">Our Learning Resources</li>
                    </a>
                    <a href="../html/successStrories.html" class="links poppins">
                        <li data-text="Success Stories">Success Stories</li>
                    </a>
                    <div class="verticalBar"></div>

                    <!-- contact button begin -->
                    <a href="../html/contact.html" class="links button poppins">Contact Us</a>
                    <!-- contact button end -->
                </div>
                <!-- page links end -->


            </ul>
        </nav>
`

const footerHTML = `
 <div>
            <!-- navbar begin -->
            <nav>
                <ul class="grid">
                    <!-- page links begin -->
                    <div class="flex alignCenter">
                        <a href="../html/about.html" class="links inter">
                            <li data-text="About Us">About Us</li>
                        </a>
                        <a href="../html/learnings.html" class="links inter">
                            <li data-text="Our Learning Resources">Our Learning Resources</li>
                        </a>
                        <a href="../html/successStrories.html" class="links inter">
                            <li data-text="Success Stories">Success Stories</li>
                        </a>
                        <a href="../html/contact.html" class="links inter">
                            <li data-text="Contact Us">Contact Us</li>
                        </a>
                    </div>
                    <!-- page links end -->

                    <!-- social links begin -->
                    <div class="flex alignCenter justifyEnd">

                        <a href="https://instagram.com" target="_blank" class="links inter">

                            <figure class="flex justifyCenter alignCenter">
                                <img src="../images/home/insta.svg" alt="">
                            </figure>

                        </a>
                        <a href="https://facebook.com" target="_blank" class="links inter">

                            <figure class="flex justifyCenter alignCenter">
                                <img src="../images/home/facebook.svg" alt="">
                            </figure>

                        </a>
                        <a href="https://twitter.com" target="_blank" class="links inter">

                            <figure class="flex justifyCenter alignCenter">
                                <img src="../images/home/twitter.svg" alt="">
                            </figure>

                        </a>
                    </div>
                    <!-- social links end -->

                    <div>
                        <!-- logo begin -->
                        <figure class="flex justifyCenter alignCenter">
                            <img src="../images/home/logo.svg" alt="">
                        </figure>
                        <!-- logo end -->
                    </div>
                </ul>
            </nav>
            <!-- navbar end -->

            <div class="flex justifyEnd alignCenter">
                <a href="" class="links inter">
                    <li data-text="Terms of Service">Terms of Service</li>
                </a>
                <a href="" class="links inter">
                    <li data-text="Privacy Policy">Privacy Policy</li>
                </a>
            </div>
        </div>
`



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
    //calling the function
    store_Navbar_Footer()
}
else {
    //parsing it so we can get dom element rather than a string
    navbar = JSON.parse(navbar)
    footer = JSON.parse(footer)
    //setting the inner html of header and footer
    headerTag.innerHTML = navbar
    footerTag.innerHTML = footer
}



//storing it into the localstorage
function store_Navbar_Footer() {
    //stringify is used to convert the dom element into string 
    // setItem is used to store the dom element into local storage with key as navbar and footer
    localStorage.setItem('navbar', JSON.stringify(navbarHTML));
    localStorage.setItem('footer', JSON.stringify(footerHTML));
}

