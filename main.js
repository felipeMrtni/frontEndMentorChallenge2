
//  ------------------  FAQ CARD  ------------------------

const questionButton = document.querySelectorAll(".question__container");

questionButton.forEach((item) => {
    const question__box__item = item.querySelector(".question__box");

    // ----------------- click event ---------------------
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

//  ------------------  SIGN UP CARD  ------------------------

let form = document.forms['sign_up_form'];

form.onsubmit = function(event) {
    event.preventDefault();

    clearError();
    checkForm();
}

function checkForm() {
    let firstnameRef = form.firstname.value;
    let lastnameRef = form.lastname.value;
    let emailRef = form.email.value;
    let passwordRef = form.password.value;
    
    if (firstnameRef === "") {
        showError("firstname__error", "First Name cannot be empty");
        showIconError("firstname__icon");
        showBorderError("firstname__input");
        // "Must have more than 3 letter and no numbers!"
    } 
    else if (checkFormRules(firstnameRef, "firstname__error", "firstname__icon", "firstname__input"));
    
    if (lastnameRef === "") {
        showError("lastname__error", "Last Name cannot be empty");
        showIconError("lastname__icon");
        showBorderError("lastname__input");
        // "Must have more than 3 letter and no numbers!", 
    } 
    else if (checkFormRules(lastnameRef, "lastname__error", "lastname__icon", "lastname__input"));
    
    if (emailRef === "") {
        showError("email__error", "Email cannot be empty");
        showIconError("email__icon");
        showBorderError("email__input");
    } 
    // else if (checkFormRules(emailRef, "email__error", "email__icon", "email__input"));
    
    if (passwordRef === "") {
        showError("password__error", "Password cannot be empty");
        showIconError("password__icon");
        showBorderError("password__input");
    } 
    // else if (checkFormRules(passwordRef, "password__error", "password__icon", "password__input"));
}

function showError(errorElement, errorMessage) {
    // find the element's class 
    let warnings = document.querySelector("."+errorElement);
    //adds the class display__error to the element's class
    warnings.classList.add("display__error");
    //adds the msg errorMessage in the html value
    warnings.innerHTML = errorMessage;
}

function showIconError(iconElement) {
    let icons = document.querySelector("."+iconElement);
    icons.classList.add("display__icon");
}

function showBorderError (inputElement) {
    let errorBorders = document.querySelector("."+inputElement);
    errorBorders.classList.add("display__border");
}

function checkFormRules (elementRef, errorElement, iconRef, inputRef) {
    // let lettersRule = /^[A-Za-z]$/;
    // let numbersRule = /^{3,30}$/;
    let namesRule = /^[A-Za-z]{3,30}$/;
    
    if(namesRule.test(elementRef) === false){
        const ruleMessage = "Must have more than 3 letter and no numbers!"
        let rules = document.querySelector("."+errorElement);
        rules.classList.add("display__error");
        rules.innerHTML = ruleMessage;
        showIconError(iconRef);
        showBorderError(inputRef);
    }
}

function clearError() {
    let errors = document.querySelectorAll(".error");
    let icons = document.querySelectorAll(".icon");
    let borders = document.querySelectorAll(".inputarea");
    errors.forEach((item) => item.classList.remove("display__error"));
    icons.forEach((item) => item.classList.remove("display__icon"));
    borders.forEach((item) => item.classList.remove("display__border"));
}

