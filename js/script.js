// ------   

const menutoggle = document.querySelector(".menutoggle");

const navs = document.querySelector(".navs");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navs.classList.toggle("active");

})

// ----------to top buttton

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{

if(window.pageYOffset > 100){

toTop.classList.add("active");

}else{

    toTop.classList.remove("active");
}

})










