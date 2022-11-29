const questionButton = document.querySelectorAll(".question__container");

questionButton.forEach((item) => {
    const question__box__item = item.querySelector(".question__box");

    question__box__item.addEventListener("click", () => {
        const answer__box__item = item.querySelector(".answer__box"); 

        const answer__box__active = document.querySelector(".active")

        checkActive(item, answer__box__item, answer__box__active)
    });
});

function checkActive(item, answer, answer__active) {
    const icon_item = item.querySelector(".icon");
    // const question_item = item.querySelector(".question__box");
    const icons = document.querySelectorAll(".icon");

    if (answer !== answer__active) {
        answer.classList.add("active");
        icon_item.classList.add("iconActive");
        // question_item.classList.add("questionActive");
    }

    if (answer__active){
        answer__active.classList.remove("active");
        icon_item.classList.remove("iconActive");
        // question_item.classList.remove("questionActive");
    }
}


