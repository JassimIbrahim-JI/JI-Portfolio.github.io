
//hide navigation bar
const header=document.querySelector("header");
window.addEventListener("scroll",()=>{

header.classList.toggle("sticky",window.scrollY > 40);

});


const btn=document.getElementById("readmore");
var dots=document.getElementById("dots");
var showText=document.getElementById("show"); 
const btn2=document.getElementById("readmore1");
var dots2=document.getElementById("dots1");
var showText2=document.getElementById("show1");
const btn3=document.getElementById("readmore2");
var showText3=document.getElementById("show2");
var dots3=document.getElementById("dots2");
const btn4=document.getElementById("readmore3");
var showText4=document.getElementById("show3");
var dots4=document.getElementById("dots3");


btn.onclick=()=>{
    if(dots.style.display === 'none'){
        dots.style.display = "inline";
        btn.innerHTML = "Read More"
        showText.style.display = "none";
        showText.style.transition = ".5s ease";
     
    }
    else{
      dots.style.display = "none";
     
      btn.innerHTML = "Read Less";
     
      showText.style.display = 'inline';
   
  
    }
}

btn2.onclick=()=>{

  if(dots2.style.display === 'none'){
    dots2.style.display = "inline"; 
    btn2.innerHTML = "Read More"
    showText2.style.display = "none";
    showText2.style.transition = ".5s ease";
}
else{
  dots2.style.display = "none";
  btn2.innerHTML = "Read Less"
  showText2.style.display = 'inline';

}

}

btn3.onclick=()=>{
  if(dots3.style.display === 'none'){
    dots3.style.display = "inline"; 
    btn3.innerHTML = "Read More"
    showText3.style.display = "none";
    showText3.style.transition = ".5s ease";
}
else{
  dots3.style.display = "none";
  btn3.innerHTML = "Read Less"
  showText3.style.display = 'inline';

}
 
}


btn4.onclick=()=>{
  if(dots4.style.display === 'none'){
    dots4.style.display = "inline"; 
    btn4.innerHTML = "Read More"
    showText4.style.display = "none";
    showText4.style.transition = ".5s ease";
}
else{
  dots4.style.display = "none";
  btn4.innerHTML = "Read Less"
  showText4.style.display = 'inline';

}
 
}

const email=document.getElementById("email");
const message=document.getElementById("message");
const names=document.getElementById("name");
const onsubmit=document.getElementById("onsubmit");



onsubmit.addEventListener("submit",(e)=>{
   e.preventDefault();

   let eBody=`
   <b> Name:</b> ${names.value} 
   <br><b>Email:</b> ${email.value} 
   <br> <b>Message:</b>  ${message.value}
 `

   console.log("Click!")
   Email.send({
    SecureToken : "5cbec1d0-cbd2-4e2d-bdae-dcd447904c97",
    To : 'jassim.ibrhm@gmail.com',
    From : 'jassim.ibrhm@gmail.com',
    Subject : "Job Application From --> " + email.value,
    Body : eBody
}).then(
  message => alert("Message Send Succesfully")
);

});

let menu=document.querySelector("#menu-ic");
let navs=document.querySelector(".navlist");

menu.onclick=()=>{
 
  navs.classList.toggle("open");
}