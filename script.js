
const toggleSwitch = document.querySelector('input[type="checkbox"]');

toggleSwitch.checked = false;


function switchTheme(e) {
    const images = document.querySelectorAll(".skillsMain ul li img");
    
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        images[0].src = "./assets/icon-firebase - light.svg";
        images[1].src = "./assets/icon-w3c - light.svg";
        images[2].src = "./assets/icon-tablet-phone-and-browser - light.svg";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        images[0].src = "./assets/icon-firebase.svg";
        images[1].src = "./assets/icon-w3c.svg";
        images[2].src = "./assets/icon-tablet-phone-and-browser.svg";
    }
}



toggleSwitch.addEventListener('change', switchTheme, false);

AOS.init()



