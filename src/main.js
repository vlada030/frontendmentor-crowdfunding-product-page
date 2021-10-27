import "./scss/main.scss";

const mobileMenu = document.querySelector(".nav-mobile");
const nav = document.querySelector(".nav");
//const openMobileMenu = document.getElementById("openMobileMenu");
//const closeMobileMenu = document.getElementById("closeMobileMenu");

const pledgeSelector25 = document.getElementById("pledgeSelector25");
const pledgeSelector75 = document.getElementById("pledgeSelector75");
const pledgeSelector200 = document.getElementById("pledgeSelector200");

const pledgeInput25 = document.getElementById("pledgeInput25");
const pledgeInput75 = document.getElementById("pledgeInput75");
const pledgeInput200 = document.getElementById("pledgeInput200");

const modalPledge = document.querySelector(".modal-pledge");
const modalConfirmation = document.querySelector(".modal-confirmation")

const formList = document.querySelectorAll('[data-form]')

// open / close mobile menu
// [openMobileMenu, closeMobileMenu].addEventListener("click", () => {
//     mobileMenu.classList.toggle("open-modal");
// });

// Modal Pledge amount submission
formList.forEach( form => {
    form.addEventListener('submit', e => {
        e.preventDefault()
        modalPledge.classList.toggle("open-modal", false);
        modalConfirmation.classList.toggle("open-modal", true)
    })
})

// bookmark click

// number calculation

window.addEventListener("click", e => {
    // open / close mobile menu
    if (
        e.target.closest("#openMobileMenu") ||
        e.target.closest("#closeMobileMenu")
    ) {
        nav.classList.toggle("disabled-fade");
        mobileMenu.classList.toggle("open-modal");
    }

    // open / close pledge modal
    if (
        e.target.id === "openPledgeModal" ||
        e.target.closest("#openModalPledge25") ||
        e.target.closest("#openModalPledge75")
    ) {
        modalPledge.classList.toggle("open-modal");
    }

    if (
        e.target.id === "openModalPledge-25" ||
        e.target.id === "openModalPledge-75" ||
        e.target.id === "openModalPledge-200"
    ) {
        modalPledge.classList.toggle("open-modal");
        const value = e.target.id.split("-")[1];
        console.log(value);

        switch (value) {
            case "25":
                pledgeInput25.value = value;
                pledgeSelector25.checked = true
                break;
            case "75":
                pledgeInput75.value = value;
                pledgeSelector75.checked = true;
                break;
            case "200":
                pledgeInput200.value = value;
                pledgeSelector200.checked = true;
                break;
        }
    }

    if (e.target.closest("#closePledgeModal")) {
        modalPledge.classList.toggle("open-modal");
    }

    // close Confirmation Dialog
    if (e.target.closest("#closeConfirmedModal")) {
        modalConfirmation.classList.toggle("open-modal", false);
    }

});

// preko tastature
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modalPledge.classList.toggle("open-modal", false);

        mobileMenu.classList.toggle("open-modal", false);
        nav.classList.toggle("disabled-fade", false);
    }
});
