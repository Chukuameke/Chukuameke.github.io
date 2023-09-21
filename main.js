const toggleBtn = document.getElementById("toggleBtn");
const navList = document.getElementById("nav-list");
isClicked = true;

// toggleBtn.classList.toggle("active");
toggleBtn.addEventListener("click",()=>{
    navList.style.display="block";
})