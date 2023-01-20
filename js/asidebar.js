const asideBarHTML = `
 <nav id="leftNavigation">
            <ul class="flex flex-column">
                <!-- 11+ begin -->
                <li class="navigators flex flex-column justifyCenter alignCenter">
                    <div class="dropdown flex justifyCenter alignCenter">
                        <p class="flex justifyCenter alignCenter">
                            11+
                        </p>
                        <button>
                            <figure class="flex justifyCenter alignCenter">
                                <img src="../../../images/learnings/next.png" alt="">
                            </figure>
                        </button>
                    </div>
                    <div class="dropdownContent">
                        <ul class="dropDownList flex flex-column justifyCenter alignStart">
                            <a href="../../learningpacks/11+/about11Plus.html" class="guide">
                                <li>
                                    About 11+
                                </li>
                            </a>
                            <a href="../../learningpacks/11+/english.html" class="guide">
                                <li>
                                    English
                                </li>
                            </a>
                            <a href="../../learningpacks/11+/maths.html" class="guide">
                                <li>
                                    Maths
                                </li>
                            </a>
                            <a href="../../learningpacks/11+/vr.html" class="guide">
                                <li>
                                    Verbal Reasoning
                                </li>
                            </a>
                            <a href="../../learningpacks/11+/nvr.html" class="guide">
                                <li>
                                    Non-Verbal Reasoning
                                </li>
                            </a>
                        </ul>
                    </div>
                </li>
                <!-- 11+ end -->

                <!-- GCSE begin -->
                <li class="navigators flex flex-column justifyCenter alignCenter">
                    <div class="dropdown flex justifyCenter alignCenter">
                        <p class="flex justifyCenter alignCenter">
                            GCSE
                        </p>
                        <button>
                            <figure class="flex justifyCenter alignCenter">
                                <img src="../../../images/learnings/next.png" alt="">
                            </figure>
                        </button>
                    </div>
                    <div class="dropdownContent">
                        <ul class="dropDownList flex flex-column justifyCenter alignStart">
                            <a href="../../learningpacks/gcse/aboutGCSE.html" class="guide">
                                <li>
                                    About GCSE
                                </li>
                            </a>
                            <a href="../../learningpacks/gcse/englishLanguage.html" class="guide">
                                <li>
                                    English Language
                                </li>
                            </a>
                            <a href="../../learningpacks/gcse/englishLiterature.html" class="guide">
                                <li>
                                    English Literature
                                </li>
                            </a>
                            <a href="../../learningpacks/gcse/mathematics.html" class="guide">
                                <li>
                                    Mathematics
                                </li>
                            </a>
                            <a href="../../learningpacks/gcse/science.html" class="guide">
                                <li>
                                    Science
                                </li>
                            </a>
                            <a href="../../learningpacks/gcse/businessStudies.html" class="guide">
                                <li>
                                    Business Studies
                                </li>
                            </a>
                            <a href="../../learningpacks/gcse/economics.html" class="guide">
                                <li>
                                    Economics
                                </li>
                            </a>
                        </ul>
                    </div>
                </li>
                <!-- GCSE end -->

                <!-- primary begin -->
                <li class="navigators flex flex-column justifyCenter alignCenter">
                    <div class="dropdown flex justifyCenter alignCenter">
                        <p class="flex justifyCenter alignCenter">
                            Primary
                        </p>
                        <button>
                            <figure class="flex justifyCenter alignCenter">
                                <img src="../../../images/learnings/next.png" alt="">
                            </figure>
                        </button>
                    </div>
                    <div class="dropdownContent">
                        <ul class="dropDownList flex flex-column justifyCenter alignStart">
                            <a href="../../learningpacks/primary/primary.html" class="guide">
                                <li>
                                    Work in Progress
                                </li>
                            </a>
                        </ul>
                    </div>
                </li>
                <!-- primary end -->

                <!-- Year 7-9 begin -->
                <li class="navigators flex flex-column justifyCenter alignCenter">
                    <div class="dropdown flex justifyCenter alignCenter">
                        <p class="flex justifyCenter alignCenter">
                            Year 7-9
                        </p>
                        <button>
                            <figure class="flex justifyCenter alignCenter">
                                <img src="../../../images/learnings/next.png" alt="">
                            </figure>
                        </button>
                    </div>
                    <div class="dropdownContent">
                        <ul class="dropDownList flex flex-column justifyCenter alignStart">
                            <a href="../../learningpacks/year7-9/year7-9.html" class="guide">
                                <li>
                                    Work in Progress
                                </li>
                            </a>
                        </ul>
                    </div>
                </li>
                <!-- Year 7-9 end -->

            </ul>
        </nav>
`


//getting the asidebar from the localstorage
let asideBar = localStorage.getItem('asideBar');

//getting the aside tag
const asideTag = document.querySelector('.aside');

//parsing both
//checking the condition before parsing
// if null then redirect to homepage
if (asideBar == null) {
    //calling the function
    store_AsideBar()
}
else {
    //parsing it so we can get dom element rather than a string
    asideBar = JSON.parse(asideBar)
    //setting the inner html of aside tag
    asideTag.innerHTML = asideBar
}



//storing it into the localstorage
function store_AsideBar() {
    //stringify is used to convert the dom element into string 
    // setItem is used to store the dom element into local storage with key as asidebar
    localStorage.setItem('asideBar', JSON.stringify(asideBarHTML));
}

let navigationButton = document.querySelector('.navigationBtn')

let lessonsButton = document.querySelector('.lessonsBtn')
let lessonsBar = document.querySelector('.videoTitleContainer')


let clickCount = 0
navigationButton.addEventListener('click',()=>{
    if(clickCount == 0){
        lessonsButton.disabled = true
        asideTag.style.display = 'block'
        asideTag.classList.remove('hideAsideBar')
        asideTag.classList.add('showAsideBar')
        clickCount = 1
        
    }
    else if(clickCount == 1){
        asideTag.classList.remove('showAsideBar')
        asideTag.classList.add('hideAsideBar')
        setTimeout(() => {
            asideTag.style.display = 'none'
        }, 900);
        lessonsButton.disabled = false
        clickCount = 0
    }
})



let clickCount2 = 0
lessonsButton.addEventListener('click', () => {
    if (clickCount2 == 0) {
        navigationButton.disabled = true
        lessonsBar.style.display = 'flex'
        lessonsBar.classList.remove('hideLessonsBar')
        lessonsBar.classList.add('showLessonsBar')
        clickCount2 = 1
    }
    else if (clickCount2 == 1) {
        lessonsBar.classList.remove('showLessonsBar')
        lessonsBar.classList.add('hideLessonsBar')
        setTimeout(() => {
            lessonsBar.style.display = 'none'
        }, 900);
        navigationButton.disabled = false
        clickCount2 = 0
    }
})
