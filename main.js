// Menu Show
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show")
        })
    }
}

showMenu("nav-toggle", "nav-menu")

// Active and Remove menu
const navLink = document.querySelectorAll(".nav_link")

function linkAction(){
    // Active Link
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

    // Remove Menu after tapping the ul links (home, about)mobile
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))


// Scroll Reveal animation
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
})

// Scroll Home
sr.reveal(".home_title", {})
sr.reveal(".button", {delay: 250})
sr.reveal(".home_img", {delay: 400})
sr.reveal(".home_social-icon", {interval: 200})

// SCroll About
sr.reveal(".about_img", {})
sr.reveal(".about_subtitle", {delay: 250})
sr.reveal(".about_text", {delay: 400})

// Scroll skills
sr.reveal(".skills_title", {})
sr.reveal(".skills_text", {delay: 250})
sr.reveal(".skills_data", {interval: 200})
sr.reveal(".skills_img", {delay: 400})

// Scroll Work
sr.reveal(".work_img", {interval: 200})

// Scroll Contact
sr.reveal(".contact_input", {interval: 200})



// Form


function  ValidateForm(){
    var username = document.getElementById("name");
    var phoneNum = document.getElementById("email");
    var password = document.getElementById("message");
    removeMessage();

    var valid = true;
   
    if(username.value.length == 0){
        username.className="wrong-input";
        username.nextElementSibling.innerHTML="Name can't be Blank(Love Jewel)";
        valid = false;
    }

    if(phoneNum.value.length<10){
        phoneNum.className="wrong-input";
        phoneNum.nextElementSibling.innerHTML="Email cannot be empty(Love Jewel)";
        valid = false;
    }

    if(password.value.length == 0){
        password.className="wrong-input";
        password.nextElementSibling.innerHTML="Message cannot be empty(Love Jewel)";
        valid = false;
    }


}

function removeMessage(){
    var errorinput=document.querySelectorAll("wrong-input");
    [].forEach.call(errorinput, function(el){
        el.classList.remove(".wrong-input");
    });

    var errorpara = document.querySelectorAll(".error");
    [].forEach.call(errorinput, function(el){
       el.innerHTML = "";
    });
}