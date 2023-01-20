const apiKey = 'AIzaSyC1rARFE8MfVltI9TtcDy2eXmShvAmIE_Y'

//---------------------------------------------------------------------//
//required elements
const videoiFrame = document.querySelector('.video iframe') 
//11+
const englishTitle = document.getElementById('english')
const mathsTitle = document.getElementById('maths')
const vrTitle = document.getElementById('vr')
const nvrTitle = document.getElementById('nvr')

//gcse
const englishLanguageLessonTitle = document.getElementById('englishLanguage')
const englishLiteratureTitle = document.getElementById('englishLiterature')
const mathematicsTitle = document.getElementById('mathematics')
const scienceTitle = document.getElementById('science')
const businessStudiesTitle = document.getElementById('businessStudies')
const economicsTitle = document.getElementById('economics')

//---------------------------------------------------------------------//


//--------------------------------------------------------------------------//
//links of videos

//maths Language link
const maths_playlist_link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=8_tlesTXfvw%2CmIn5X1FuUa0%2C6c4ySF2Ykko%2CvKmUXGzLdX8%2CpU9ZwLCvtOE%2C7Vckx9BGNj4%2CIH9ojt3SO9Y%2CSYwHhi-8gv8%2CFc0H27XOgzM%2CzBx0EHXm7_M%2CCTbYobiQZ94%2CjaqCEAcdZJ4%2C8hW1YbimCE4%2CJbO6gZ3KU5o%2CrfKFlg7rx00%2C-xsJ4Ler3_o%2CQVSZAcI4LaM%2CaYwlJp2j2-A%2C8Cbmx7F2y7U%2C5OJ49d4VGTY%2C2puvGx_43Oo%2CLKYlw5NFj68%2Chmgq_3IdlvQ%2CP_zdU1NVBCM%2C1W_T8eGAOPo%2C5Jd8XSsQges%2CRHpeZw4P-rk%2CmeDwM0wzALQ%2CXnesMO6PBgo%2CYN6crxr3yBI%2C1n_nEAP5snk%2ChX_Dxj7s-xE%2CBxBe_1jszt4%2CX2GxPTaCinc%2CgK2ddYvRHMY%2C81KMoI5gxgU%2C-KoRatKePV0%2CnF8D-cyPEIU%2C6WKUiiQzOqc%2CcMPVuHvMoFc%2CTOLVVKMshgc%2CE-6H09AT27w%2CvCq8fsQlnCw%2C8CYNgOhG_bY%2CQo0wBXb7RFo&key=${apiKey}`

//vr Language link
const vr_playlist_link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=FB81EksfA9c%2C2z2qJRj22EQ%2CiD-TpjliXi4%2CXRg-H4QDuwM%2C2bbIXExxyWo%2CsImlNmVDtY4%2CH-kYG9-16Uw%2Cz0pOlbekz5c%2C7CQCNoz2lDs%2CtfcmwOYzDB8%2C9pM7g94YlWI%2Cy0TTI-0cQI8%2CDgDQyZj3Syg%2ClM3AGha2OGg%2CktidddKYOr0%2CFTGlsqmNYGg%2C8gaSW7qoQRI%2C-N_ipYExIOw%2CHXl0S128B_M%2Coann7KL9I0w%2CISiT9fbThEM%2C6ZuWGgF5bK0%2CMM3urtEzBzU%2C9QvBKQf2Xpg%2CjcZvLAeBM2I%2CM_fWXpKu9Hc%2CTY_-9SCFTFc%2Cq9veMc9Rfak%2CoGYiaiwvh-I%2Ctkcx47giZdo%2Cfe2gZH6CnNk%2CGLxPUjbG_IA%2CkH7JQY0n2bQ%2CAaaia5RBYKY%2CDn_7PKVnVv8%2C8xpYDrlXT2o%2Cd25RKYLpy0Y%2Cxq6kjtDz8Lc%2Ciq625_Qx4t4%2CeVb6QSwiiNs%2CDPBedbRgl5w%2CLLUocfJM3QI%2CQ8J9H6yjGJk%2CNTnZXk4LMog%2CW5iCNQZdFfM%2CUPkKZJfqJnw%2Cp2QN_BRu_cs%2CXszgdSGgSLw%2C&key=${apiKey}`


//nvr Language link
const nvr_playlist_link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=GNf3ckwMRj4%2C8IhyeNQZu04%2CH_wKNtumPAA%2CCjnXTYUvCFw%2Cibv1Kh61Hcg%2C1F9-h4cYqfg%2Cdx7Y9H_k44I%2CpufGisiQ9uA%2C4ItmOJKkfVo%2CiHy6Qr3bdDM%2CiCD3KoE8kDk%2CMlUz8dHIl5g%2CxYD6--YWyhY%2CRmC3ZXHNqdA%2CFbYjgy50lSY%2CyVwRZ8W5S1Y%2C52RlDR1k_4Y%2CicP1-4_rgw0%2CRUqhtYb5L5Y%2Co45pFWI2G9g%2C1KHFXNG_LjA%2CV88tVCy145Q%2CZ9k0900lNIE%2Cfb5r66vHXbo%2CviIitjazWdo%2CkarR-X9x07k%2CZnNdV3i9RaU%2CBn_LcO6tCxY%2CMy487w6S028%2CzaeQr9lw5yg%2C7jaui7gGvFw%2CLtk-ttPErbI%2CVj9g2Rx6_eE&key=${apiKey}`

//english Language link
const gcse_englishLanguage_playlist_link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=pBByqXsIp-U%2CYC7MLmANiBA%2CXibcr7wLmgY%2CgbsQtS-JiAU%2Caxn0G7LKxsA%2CI992J9Eebwg&key=${apiKey}`

//english Literature link
const gcse_englishLiterature_playlist_link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=lu8fUYvAQlA%2Clu8fUYvAQlA%2CxeJFnsYlNts%2CN5VTJFbwnpQ%2CzuUkrhgVYnQ&key=${apiKey}`

//mathematics link
const gcse_mathematics_playlist_link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=Fted1mpIruM%2COrIIXp-z1kU%2CtdyDPFN7dkY%2CvjEYcSbME8Y%2C_lQIKCjv-9E%2CHcA110fdGNg%2CrNJS4RtBeJg%2C9_GOLHhXwmI%2CMcTuoPXehOg%2CIrNBQfYBXoM%2CN7BUlK_GCNg%2C-lifygovApo&key=${apiKey}`

//science link
const gcse_science_playlist_link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=2hoAN8ui90E%2C63wj2SoQKvQ%2CP2uejaJ8Un8%2CJldEtB5onCU%2ColONdewh6_M%2CWQ_mW_ZcjjU&key=${apiKey}`

//economics link
const gcse_economics_playlist_link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=PzAaVNbREis%2C0cxl_sebsds%2CKUcJlNvqRj8%2CBhbns7Sw_m0%2CZiqOIJK9_Oc%2CCqGQszEVSwA%2CwJjT4pqdCj4&key=${apiKey}`

//business studies link
const gcse_businessStudies_playlist_link = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=SrIQIY3Vw-8%2CcJcyLvpXWrg%2CSe6njfdIUAY%2CCsc__oP_icY%2CLh2HOquNzuM%2CIaEhn5AWpWE%2CwimuGlLHS1I%2Csy6hpBbx2XI%2C3ixVxJ_6O8g%2C3ixVxJ_6O8g%2CUua5yMx6190&key=${apiKey}`

//--------------------------------------------------------------------------------------//


//funcntion to fethc videos
async function fetch_videos(link, htmlElement){
    const res = await fetch(link)
    const data = await res.json()
    writeData(data, htmlElement)
}


//function to write the title and embed videos based title
const writeData = (data,htmlElement)=>{
    data.items.forEach((element,index)=>{
        const videoId = element.id
        const object =  element.snippet
        const title = object.title
        const html = `
                <li class="videoTitle grid justifyCenter alignCenter" id=${videoId}>
                    <span class="flex justifyCenter alignCenter">${index+1}</span>

                    <figure class="justifyCenter alignCenter" >
                         <img src="../../../images/learnings/play-button.png" alt="">
                    </figure>
                    <p>${title.length > 70 ? title.slice(0,65)+'...':title}</p>
                </li>`
        if(htmlElement != null){
            htmlElement.innerHTML += html
        }
    })

    const videoTitles = document.querySelectorAll('.mainContainer .videoTitleContainer li')
    //playing youtube videos according to title
    videoTitles.forEach((element,index)=>{
        element.addEventListener('click',()=>{
            removeClass(index)
            const id = element.id
            videoiFrame.src = `https://www.youtube.com/embed/${id}`
            element.classList.add('play')
        })
     
    })

    function removeClass(elementIndex) {
        videoTitles.forEach((element,index)=>{
            if(index != elementIndex){
                element.classList.remove('play')
            }
        })
    }
}

fetch_videos(gcse_englishLanguage_playlist_link, englishTitle)
fetch_videos(maths_playlist_link, mathsTitle)
fetch_videos(vr_playlist_link, vrTitle)
fetch_videos(nvr_playlist_link, nvrTitle)
fetch_videos(gcse_englishLanguage_playlist_link, englishLanguageLessonTitle)
fetch_videos(gcse_englishLiterature_playlist_link, englishLiteratureTitle)
fetch_videos(gcse_mathematics_playlist_link, mathematicsTitle)
fetch_videos(gcse_science_playlist_link, scienceTitle)
fetch_videos(gcse_economics_playlist_link, economicsTitle)
fetch_videos(gcse_businessStudies_playlist_link, businessStudiesTitle)
