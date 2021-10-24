import "./scss/main.scss";

const mobileMenu = document.querySelector(".nav-mobile");
const nav = document.querySelector(".nav");
const openMobileMenu = document.getElementById("openMobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu")

    // open / close mobile menu
    // [openMobileMenu, closeMobileMenu].addEventListener("click", () => {
    //     mobileMenu.classList.toggle("open-modal");
    // });

    window.addEventListener('click', e => {        
        if (e.target.closest('#openMobileMenu') || e.target.closest('#closeMobileMenu')) {
            nav.classList.toggle('disabled')
            mobileMenu.classList.toggle("open-modal");
        }
    })
