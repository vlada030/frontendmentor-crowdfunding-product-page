import "../scss/main.scss";
import {
    nav,
    mobileMenu,
    btnBookmark,
    modalPledge,
    modalConfirmation,
    pledgeInput75,
    pledgeInput25,
    pledgeInput200,
    pledgeSelector25,
    pledgeSelector75,
    pledgeSelector200,
    formList,
    radioBtnList,
    pledgeOptionList,
} from "./variables";
import Stats from "./statistics";
import {
    updateModalPledgeUI,
    resetModalPledgeUI,
    removePledgeActiveClass
} from "./helper";

// number calculation

window.addEventListener("click", (e) => {
    // open / close mobile menu
    if (
        e.target.closest("#openMobileMenu") ||
        e.target.closest("#closeMobileMenu")
    ) {
        nav.classList.toggle("disabled-fade");
        mobileMenu.classList.toggle("open-modal");
    }

    // bookmark button
    if (e.target.closest("#btnBookmark")) {
        if (btnBookmark.classList.contains("active")) {
            btnBookmark.classList.toggle("active", false);
            btnBookmark.querySelector("span").innerText = "Bookmark";
        } else {
            btnBookmark.classList.toggle("active", true);
            btnBookmark.querySelector("span").innerText = "Bookmarked";
        }
    }

    // open / close pledge modal
    if (e.target.id === "openPledgeModal") {
        resetModalPledgeUI();
        modalPledge.classList.toggle("open-modal");
    }

    if (e.target.closest("#closePledgeModal")) {
        modalPledge.classList.toggle("open-modal");
    }

    if (
        e.target.id === "openModalPledge-25" ||
        e.target.id === "openModalPledge-75" ||
        e.target.id === "openModalPledge-200"
    ) {
        modalPledge.classList.toggle("open-modal");
        updateModalPledgeUI(e.target);
    }

    // close Confirmation Dialog
    if (e.target.closest("#closeConfirmedModal")) {
        modalConfirmation.classList.toggle("open-modal", false);
    }
});

// Modal Pledge amount submission and CLOSE MODAL
formList.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modalPledge.classList.toggle("open-modal", false);
        modalConfirmation.classList.toggle("open-modal", true);
    });
});

// handle check on pledge option
radioBtnList.forEach((button) => {
    button.addEventListener("click", () => {
        removePledgeActiveClass();
        let pledgeOption = button.closest(".pledge-option");

        pledgeOption.classList.toggle("active", true);
    });
});

// preko tastature
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modalPledge.classList.toggle("open-modal", false);
        mobileMenu.classList.toggle("open-modal", false);
        nav.classList.toggle("disabled-fade", false);
    }
});
