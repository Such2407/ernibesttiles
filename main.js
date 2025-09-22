const navSatic = document.querySelector(".nav-satic")
const menuBarImg = document.querySelector(".menu-bar-img")
const bensonText = document.querySelector(".benson-text")
const greetingsBox = document.querySelector(".greetings-box")



window.addEventListener("scroll", function(){
    let windowsHeight=window.innerHeight
    let navHeight=navSatic.getBoundingClientRect().top
    let showNav =610
    let sH = navHeight+showNav
    if(windowsHeight>sH){
        menuBarImg.classList.add("lg-display-block")
        bensonText.classList.add("lg-display-none")
        greetingsBox.classList.add("gd")
    }
    else{
        menuBarImg.classList.remove("lg-display-block")
        bensonText.classList.remove("lg-display-none")
        greetingsBox.classList.remove("gd")
    }
})
// function smallScreen(){
//     let windowWidth = window.innerWidth
//     console.log(windowWidth);
//     if(windowWidth < 1230){
//         menuBarImg.classList.remove("lg-display-block")
//         bensonText.classList.remove("lg-display-none")
//     }
//     else{
//         menuBarImg.classList.add("lg-display-block")
//         bensonText.classList.add("lg-display-none")
//     }
// }
// smallScreen()

const myGallary = document.querySelector(".gallary-container")
const btn=document.querySelectorAll(".gallery")
const list=document.querySelectorAll(".list")

myGallary.addEventListener("click", function(e){
    let myTarget = e.target.dataset.id
    let id = document.getElementById(myTarget)
    if(id){
        btn.forEach(function(bt){
            bt.classList.remove("act")
            e.target.classList.add("act")
         })
         list.forEach(function(li){
            li.classList.remove("act")
            e.target.classList.add("act")
         })
        id.classList.add("act")
    }
})

//  FORM VALIDATION

const formName = document.getElementById("name")
const formEmail = document.getElementById("email")
const formTextArea = document.getElementById("text-area")
const nameError = document.querySelector(".name-error")
const emailError = document.querySelector(".email-error")
const massageError = document.querySelector(".text-area-error")
const submitError = document.querySelector(".submit-error")

// FOR NAME
const validateName = formName.addEventListener("keyup", function(){
    let nameValue = formName.value;
    if(nameValue.length==0){
        nameError.innerHTML=("Name is required")
        return false
    }
    if(!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full name"
        return false
    }
    nameError.innerHTML='<img src="pictures/5290058.png" width="20px" height="20px" alt="">'
    return true

})

// FOR EMAIL
const validateEmail = formEmail.addEventListener("keyup", function(){
    let emailValue = formEmail.value;
    if(emailValue.length==0){
        emailError.innerHTML=("mail is required")
        return false
    }
    if(!emailValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="Mail is Invalid"
        return false
    }
    emailError.innerHTML='<img src="pictures/5290058.png" width="20px" height="20px" alt="">'
    return true
})

// FOR MASSAGE
const validateMassage=formTextArea.addEventListener("keyup", function(){
    let massagevalue = formTextArea.value;
    let massageCount=30;
    let massageNumber=massageCount-massagevalue.length
    
    if(massagevalue==""){
        massageError.innerHTML="Please drop a massage"
        return false
    }
    if(massageNumber > 0){
        massageError.innerHTML= massageNumber  + " words remaining"
        return false
    }
    
        massageError.innerHTML= '<img src="pictures/5290058.png" width="20px" height="20px" alt="">'
         return true
    
})

const send = document.getElementById("send")
const validateform = send.addEventListener("submit",function (){
    if(!validateName || !validateEmail|| !validateMassage){
        submitError.innerHTML= "Check and fill correctly"
        return false
    }
    
       submitError.innerHTML= '<img src="pictures/5290058.png" width="20px" height="20px" alt="">'
         return true

})

// const form = document.getElementById("#form")
// const prevent = form.addEventListener("submit",function (e){
//     e.preventDefault
// })

const menuDropdown = document.querySelector(".menu-dropdown")
const menuTags = document.querySelectorAll(".menu-tag")
const addMenuIcon = document.querySelector(".add-menu")
const navBox = document.querySelector(".nav-box")
const printCV = document.querySelector(".printR")

addMenuIcon.addEventListener("click", function(){
    menuDropdown.classList.add("add-drop")
    navBox.classList.add("lg-display-none")
    document.body.style.overflow="hidden"
})
menuTags.forEach(function(tag){
    tag.addEventListener("click", function(){
    menuDropdown.classList.remove("add-drop")
    navBox.classList.remove("lg-display-none")
    document.body.style.overflow="visible"
    })
})
printCV.addEventListener("click", function(){
    window.print();
})
