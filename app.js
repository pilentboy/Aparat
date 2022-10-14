// HEADER LEFT SIDE
const headerUserBTN=document.querySelector(".headerUserBTN");
const hedarOptionsLeft=document.querySelector(".drop-down-content-prof");
const headerOptionsBell=document.querySelector(".drop-down-bell");
const headerOptionsBellBTN=document.querySelector("#bell");
let root = document.querySelector(":root")

const nav=document.querySelector(".nav");
const body=document.querySelector("#body");
const header=document.querySelector(".header");
const main=document.querySelector(".main");

// ///////////functions used

function removeClassList(elemtn,className){
    elemtn.classList.remove(className)
}
function addClass(elemtn,className){
    elemtn.classList.add(className)
}

function toggleClass(element,className){
    element.classList.toggle(className)
}

//check if the element has the className
function checkStatus(element,className){
		if(element.classList.contains(className)){
			return true
		}
        else{
            return false
        }
}

//disable classess when Aside is active
function disableAsideClasses(){ 
    removeClassList(main,"afterBG")
    removeClassList(aSide,"activeAside")
    removeClassList(main,"mainWidth")
}


////////////////////////////////////////////////



headerUserBTN.addEventListener("click",()=>{
    removeClassList(headerOptionsBell,"flex")
    toggleClass(hedarOptionsLeft,"flex")
    if(body.clientWidth < 1000){
        disableAsideClasses()
    }
})

headerOptionsBellBTN.addEventListener("click",()=>{
    removeClassList(hedarOptionsLeft,"flex")
    toggleClass(headerOptionsBell,"flex")
    if(body.clientWidth < 1000){
        disableAsideClasses()
    }
})





// show seach box on small screens
const showSearchBoxBTN=document.querySelector(".BTNShowSearchBox")
const searchBox=document.querySelector(".searchBoxSmallScreen")
const closeSearchBox=document.querySelector(".closeSearchInput")
const centerSearchInputDiv=document.querySelector(".center")

function disableAside(element){
    element.addEventListener("click",()=>{
        removeClassList(main,"afterBG")
        removeClassList(aSide,"activeAside")
        removeClassList(main,"mainWidth")
    })
   
}


centerSearchInputDiv.addEventListener("click",()=>{
    removeClassList(headerOptionsBell,"flex")
    removeClassList(hedarOptionsLeft,"flex")
    if(body.clientWidth < 1000){
        disableAsideClasses()
    }
})

showSearchBoxBTN.addEventListener("click",()=>{
    addClass(searchBox,"activeSeachBoxSmallScreen")
    removeClassList(hedarOptionsLeft,"flex")
    removeClassList(headerOptionsBell,"flex")
    disableAsideClasses()

})

closeSearchBox.addEventListener("click",()=>{
    removeClassList(searchBox,"activeSeachBoxSmallScreen")
})

// function disableNavElements(element){
//     element.addEventListener("click",()=>{
//     removeClassList(searchBox,"activeSeachBoxSmallScreen")
//     removeClassList(hedarOptionsLeft,"flex")
//     removeClassList(headerOptionsBell,"flex")


//     })
// }

// disableNavElements(main)

// night light btn
const nightLightDiv=document.getElementsByClassName("night-dayOption")
const lightNightIcon=document.getElementsByClassName("moon");
const nighLightToggleIcon=document.getElementsByClassName("toggle");

let nightLightDivList=[...nightLightDiv]
let nighLightToggleIconList=[...nighLightToggleIcon]
let lightNightIconList=[...lightNightIcon]



 // dark/light mode
let themeMode="dark";

function changeMode(theme){
    switch(theme){
        
        case "dark":
            
            root.style.setProperty("--inputIcons", "white")
            root.style.setProperty("--channelLinks", "gray")
            root.style.setProperty("--aSideH3", "red")
            root.style.setProperty("--black", "white")
            root.style.setProperty("--black3", "rgb(245, 245, 249)")
            root.style.setProperty("--black4", "white")
            root.style.setProperty("--white", "black")
            root.style.setProperty("--black5", "gray")
            root.style.setProperty("--gray", "black")
            root.style.setProperty("--black2", "white")
            root.style.setProperty("--gray2", "rgb(245, 245, 249)")

            lightNightIconList.forEach((icon)=>{
                removeClassList(icon,"fa-moon-o")
                addClass(icon,"fa-sun-o")
            })
            nighLightToggleIconList.forEach((toggle)=>{
                removeClassList(toggle,"fa-toggle-on")
                addClass(toggle,"fa-toggle-off")
            })
            themeMode="light"
            break;

        case "light":
            root.style.setProperty("--inputIcons", "rgb(177, 173, 173)")
            root.style.setProperty("--channelLinks", "rgb(33, 34, 38")
            root.style.setProperty("--aSideH3", "white")
            root.style.setProperty("--black", "rgb(22, 23, 26)")
            root.style.setProperty("--black3", "rgba(16, 14, 14, 0.893)")
            root.style.setProperty("--black4", "rgb(33, 34, 38")
            root.style.setProperty("--white", "white")
            root.style.setProperty("--gray", "rgb(177, 173, 173)")
            root.style.setProperty("--black2", "rgb(41, 42, 51)")
            root.style.setProperty("--gray2", "rgba(69, 68, 68, 0.574)")
            lightNightIconList.forEach((icon)=>{
                    removeClassList(icon,"fa-sun-o")
                    addClass(icon,"fa-moon-o")
                })
                nighLightToggleIconList.forEach((toggle)=>{
                    removeClassList(toggle,"fa-toggle-off")
                    addClass(toggle,"fa-toggle-on")
                })
            themeMode="dark"
            break;


    }
}

nightLightDivList.forEach((div)=>{
    div.addEventListener("click",()=>{
        changeMode(themeMode)
    })
})



// aside 
const displayAsideBTN=document.getElementsByClassName("hamburgerBTN");
const aSide=document.querySelector(".aside");

let AsideBtnList=[...displayAsideBTN]
let aSideStataus=false;
AsideBtnList.forEach((e)=>{
    e.addEventListener("click",()=>{
        toggleClass(aSide,"activeAside");
        
        if(body.clientWidth > 1115){
            toggleClass(main,"mainWidth")
        }
        
        if(body.clientWidth <= 1115){
            toggleClass(header,"zIndex40")
            toggleClass(main,"afterBG")
            removeClassList(headerOptionsBell,"flex")
            removeClassList(hedarOptionsLeft,"flex")
			removeClassList(main,"mainWidth")
            aSideStataus=true;
        }
       
    })
    
})


main.addEventListener("click",()=>{
    if(body.clientWidth <= 1115 ){
            disableAsideClasses()
    }
})


window.addEventListener("resize",()=>{
	if(body.clientWidth <=1115){
        disableAsideClasses()

	}	

    if(body.clientWidth > 645){
        removeClassList(searchBox,"activeSeachBoxSmallScreen")

    }

    if(body.clientWidth > 1115){
        removeClassList(header,"zIndex40")
        removeClassList(main,"afterBG")
        
		if(checkStatus(aSide,"activeAside")){
			addClass(main,"mainWidth")
		}
		
    }
   
})

/* VIDEOS  */
const videoOptionsBTN=document.getElementsByClassName("videoOptionsBTN");
const videoOptions=document.getElementsByClassName("videoOptions");

let videoOptionsList=[...videoOptions]
let videoOptionsBTNList=[...videoOptionsBTN]

videoOptionsBTNList.forEach((e)=>{
    e.addEventListener("click",()=>{
         
            let videoBTNIndex= videoOptionsBTNList.indexOf(e) 
            videoOptionsList[videoBTNIndex].classList.toggle("flex") 
        })
  
})



function disableNavElements(element){
    element.addEventListener("click",()=>{
    removeClassList(searchBox,"activeSeachBoxSmallScreen")
    removeClassList(hedarOptionsLeft,"flex")
    removeClassList(headerOptionsBell,"flex")
  
    }

    )
}

disableNavElements(main)
