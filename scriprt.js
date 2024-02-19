// Array of text lines you want to type
const textLines = [
    "I am a seasoned professional with a strong background in web development and mobile app development using Flutter. With two years of experience in web development, I have honed my skills in front-end and back-end development, utilizing technologies such as HTML, CSS, JavaScript, React.js, and Node.js to create dynamic and user-friendly websites. Additionally, my proficiency in Flutter allows me to develop cross-platform mobile applications with stunning UIs and smooth performance.",
    "As a product researcher, I am passionate about exploring new technologies and identifying emerging trends in the tech industry. I conduct thorough market analysis and user research to ensure that the products I develop are both technically robust and aligned with the needs of end-users. My curiosity and enthusiasm drive me to continuously seek out new opportunities for growth and innovation.",
    ""
];

const typed = new Typed('#typed-text', {
    strings: textLines,
    typeSpeed: 50, // Speed of typing in milliseconds
    backSpeed: 100000, // Speed of deleting in milliseconds
    loop: true, // Whether to loop through the text or not
    onComplete: function () {
        // After Typed.js completes, display additional content
        document.getElementById('additional-content').style.display = 'block';
        console.log('Typed text complete');
    }
});









document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const modeSwitchBtn = document.querySelector(".mode");
    const moonIcon = document.querySelector(".moon");
    const sunIcon = document.querySelector(".sun");
    const modeText = document.querySelector(".mode-text");
    const toggle = document.querySelector(".image");
    const sideBar = document.querySelector(".sidebar");
    const toogleBtn = document.getElementById("toogle-btn");
    const menuBar = document.querySelector(".sidebar-toggle"); // Corrected selector to target element with class "sidebar-toggle"


    menuBar.addEventListener("click", function () {
        sideBar.classList.toggle("hide");
    });




    toggle.addEventListener("click", function () {
        menuBar.classList.toggle("hide");
    })



// Function to toggle mode
function toggleMode() {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        moonIcon.style.opacity = "1";
        sunIcon.style.opacity = "0";
        modeText.textContent = "Light Mode";
        // Save mode to local storage
        localStorage.setItem("mode", "dark");
    } else {
        moonIcon.style.opacity = "0";
        sunIcon.style.opacity = "1";
        modeText.textContent = "Dark Mode";
        // Save mode to local storage
        localStorage.setItem("mode", "light");
    }
}

// Event listener for mode switch button
modeSwitchBtn.addEventListener("click", toggleMode);

// Check local storage for saved mode on page load
window.addEventListener("load", () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        toggleMode(); // Apply dark mode if saved mode is dark
    }
});

});



const availableKeywords = [
    { name: "Home", link: "index.html" },
    { name: "About", link: "about.html" },
    { name: "Portfolio", link: "portfolio.html" },
    { name: "Portfolio", link: "resume.html" },
    { name: "Contact", link: "contact.html" }
];

const inputBox = document.getElementById("input-box");
const searchBtn = document.getElementById("searchBtn"); // Assuming you have a search button with id "searchBtn"

inputBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        search();
    }
});

searchBtn.addEventListener("click", () => {
    search();
});

function search() {
    let input = inputBox.value.toLowerCase();
    let pageFound = false;
    availableKeywords.forEach((keyword) => {
        if (keyword.name.toLowerCase() === input) {
            window.location.href = keyword.link;
            pageFound = true;
        }
    });
    if (!pageFound) {
        console.log("Search not found"); // You can optionally provide feedback that the search term was not found
    }
}