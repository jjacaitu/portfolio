// Get the toggleSwitch element ("checkbox")
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Set the checkbox to false ("not checked")
toggleSwitch.checked = false;

// Function to run when the checkbox changes state
function switchTheme(e) {
    const images = document.querySelectorAll(".skillsMain ul li img");
    
    // If it is checked changed the theme to light and change the 3 icons that are images to the correct color
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        images[0].src = "./assets/icon-firebase - light.svg";
        images[1].src = "./assets/icon-w3c - light.svg";
        images[2].src = "./assets/icon-tablet-phone-and-browser - light.svg";
    }
    // If it is checked changed the theme to dark and change the 3 icons that are images to the correct color
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        images[0].src = "./assets/icon-firebase.svg";
        images[1].src = "./assets/icon-w3c.svg";
        images[2].src = "./assets/icon-tablet-phone-and-browser.svg";
    }
}


// Adding the event listener
toggleSwitch.addEventListener('change', switchTheme, false);

// Initiating animation on scroll
AOS.init()



