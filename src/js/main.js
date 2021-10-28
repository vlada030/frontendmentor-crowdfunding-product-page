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
    removePledgeActiveClass,
} from "./helper";

// initial calculation
// const statistics = new Stats(89914, 100000, 5007)
const statistics = new Stats(50000, 100000, 5000, 101, 64, 0);
statistics.calcAmount();
statistics.updateUI();

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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    // close Confirmation Dialog
    if (e.target.closest("#closeConfirmedModal")) {
        modalConfirmation.classList.toggle("open-modal", false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
});

// Modal Pledge amount submission and CLOSE MODAL
formList.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputElem = form.querySelector('input[type="number"]');
        const inputValue = inputElem.value;
        const selectorValue = inputElem.placeholder;

        statistics.calcAmount(inputValue);
        statistics.calcTotalBackers();

        switch (selectorValue) {
            case '0': 
                break
            case "25":
                statistics.calcLeftNoBackers25();
                break;
            case "75":
                statistics.calcLeftNoBackers75();
                break;
            case "200":
                statistics.calcLeftNoBackers200();
                break;
            default:
                return;
        }

        statistics.updateUI();
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
