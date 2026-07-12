import "./styles.css";
import homePage from "./content.js";
import about from "./about.js";
import viewmenu from "./viewmenu.js";
import styleshome from "./styles2.lazy.css" 
import stylesmenu from "./styles3.lazy.css"
import stylesabout from "./stylesabout.lazy.css"
console.log("HI i am priyanshu");
homePage();
styleshome.use();
const btn1=document.querySelector(".cta-btn");
btn1.addEventListener("click",menu);


function menu(){
    const getelement = document.getElementById("content");
    getelement.innerHTML=``
    viewmenu();
    styleshome.unuse();
    stylesabout.unuse();
    stylesmenu.use();
    const btn3=document.getElementById("back");
    btn3.addEventListener("click",home);
}

function contact(){
    const getelement = document.getElementById("content");
    getelement.innerHTML=``
    styleshome.unuse();
    stylesmenu.unuse();
    stylesabout.use();
    about();
    const homebtn=document.getElementById("homebtn");
    const menubtn=document.getElementById("menubtn");
    homebtn.addEventListener("click",home);
    menubtn.addEventListener("click",menu);
}

function home(){
    const getelement = document.getElementById("content");
    getelement.innerHTML=``
    stylesmenu.unuse();
    stylesabout.unuse();
    styleshome.use();
    homePage();
    const btn2=document.querySelector(".cta-btn");
    btn2.addEventListener("click",menu);
}



const homeBtn=document.getElementById("home")
homeBtn.addEventListener("click",home);
const menuBtn=document.getElementById("menu")
menuBtn.addEventListener("click",menu);
const contactBtn=document.getElementById("contact")
contactBtn.addEventListener("click",contact);
// import "./stylesmenu.css";

// import "./stylesabout.css";