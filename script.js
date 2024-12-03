
function sendMail(){
    let parms ={
        name : document.getElementById("Name").value,
        email : document.getElementById("Email").value,
       message : document.getElementById("Message").value,

    }
    emailjs.send("service_dg8zb2j","template_wxyy525",parms).then(alert("Email send ✔✔✔"))
}


var typed = new Typed(".text", {
    strings: ["" , " JE T'AIME LAILA INO ❤❤❤❤❤❤ " , ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
