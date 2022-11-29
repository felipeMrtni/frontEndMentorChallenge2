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
    const question_item = item.querySelector(".question__box");

    defaultConfig(item);

    if (answer__active){
        answer__active.classList.remove("active");
        answer__active.style.height = 0;
        // icon_item.classList.remove("iconActive");
        // question_item.classList.remove("questionActive");
        
    }

    if (answer !== answer__active) {
        answer.classList.add("active");
        // answer.style.height = "fit-content";
        answer.style.height = answer.scrollHeight + 0 + "px";
        // icon_item.classList.add("iconActive");
        icon_item.style.rotate = "180deg";
        // question_item.classList.add("questionActive");
        question_item.style.fontWeight = "700";
    } 
}

function defaultConfig (item){
    const icons = document.querySelectorAll(".icon");
    const questions = document.querySelectorAll(".question__box");
    const answers = document.querySelectorAll(".answer__box")
    // icons.forEach((item) => (item.classList.remove("iconActive")))
    icons.forEach((item) => (item.style.rotate = "0deg"));
    // questions.forEach((item) => (item.classList.remove("questionActive")))
    questions.forEach((item) => (item.style.fontWeight = "400"));

    answers.forEach((item) => (item.style.height = 0));
}




