import { container, pledgeOptionList } from "./variables";

export const updateModalPledgeUI = (clickedElement) => {
    const value = clickedElement.id.split("-")[1];
    //console.log(value);
    let pledgeOption;

    resetModalPledgeUI();

    switch (value) {
        case "25":
            pledgeInput25.value = value;
            pledgeSelector25.checked = true;
            pledgeOption = pledgeInput25.closest(".pledge-option");
            break;
        case "75":
            pledgeInput75.value = value;
            pledgeSelector75.checked = true;
            pledgeOption = pledgeInput75.closest(".pledge-option");
            break;
        case "200":
            pledgeInput200.value = value;
            pledgeSelector200.checked = true;
            pledgeOption = pledgeInput200.closest(".pledge-option");
            break;
        default:
            return;
    }

    pledgeOption.classList.toggle("active", true);
};

export const resetModalPledgeUI = () => {
    // remove active class & checked all to false
    pledgeOptionList.forEach((item) => {
        const radioInput = item.querySelector('[type="radio"]');
        radioInput.checked = false;
        item.classList.toggle("active", false);
    });

    // set inputs to start values
    pledgeInput25.value = 25;
    pledgeInput75.value = 75;
    pledgeInput200.value = 200;
};

export const removePledgeActiveClass = () => {
    pledgeOptionList.forEach((item) => {
        item.classList.toggle("active", false);
    });
};

export const adjustBackground = (modal, isModalVisible) => {
    if (isModalVisible) {
        const modalHeight = modal.offsetHeight
        container.style.height = `${modalHeight}px`

    } else {
        container.style.height = `auto`
    }
};
