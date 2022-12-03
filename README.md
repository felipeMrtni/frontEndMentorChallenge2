# Frontend Mentor - FAQ accordion card solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

<p align="center">
    <img width="768px" src="/images/desktop_challenge2.jpg"></img>
    <img width="768px" src="/images/mobile_challenge2.jpg"></img>
</p>

![](/images/desktop_challenge2.jpg)
![](/images/mobile_challenge2.jpg)

### Links

- Solution URL: [Project repository](https://github.com/felipeMrtni/frontEndMentorChallenge2.git)
- Live Site URL: [Project site](https://felipemrtni.github.io/frontEndMentorChallenge2/)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- JavaScript

### What I learned

  I took this challenge because I saw an opportunity to practice CSS position and display. Through the processes I had to re-style most of the components due to mistakes made in HTML built. That made me realize how important it is to know how many pieces you are working with.
  For the challenge it was built a accordion structure so that the answers would be hidden and show up only when the question box was clicked. The tools used to built it were HTML, CSS and JavaScript
  The accordion HTML structure:
  ```html
      <div container>
        <div box>
          <div QUESTION-box > // parte a mostra clicavel
            <span> text </span> // texto visivel
            <div icon> <img> </div> // icone de aberto e fechado
          </div>
          <div ANSWER-box > // parte escondida
            <p> text </p> // texto nao visivel 
          </div>
        </div>
        .
        .
        .

      </div>
```

In CSS styled everything the way I wanted and then set the answe-box height to 0.
Then in JavaScript used querySelector, addEventListener, forEach to find the element, then used a if statement to check if the class was active, or not, and change its properties.
    
```js
const question_container = document.querySelector(".container");	
question_container.forEach((item) => {
  const question_box = item.querySelector(".box)
  question_box.addEventListener("click", () => {
    const answer_box = item.querySelector(".content")
    const answer_box_active = document.querySelector(".active)

    checkActive(item, answer_box, answer_box_active);
  }
} 

function chackActive(item, answer_box, answer_box_active) {
  if(answer_box !== answer_box_active){
    answer_box.classList.add("active")
    answer_box.style.height = question.scrollHeight + 0 + "px";
  }
  if(answer_box === answer_box_active){
    answer_box_actvie.classList.remove("active);
    answer_box_active.style.height = 0;
  }
}
```

for the desktop image to be cut to fit only inside the white box and to have the shadow below it, background-image: url() was used in css media query.
```css
.white-box {
  background-image: url();
  background-repeat: no-repeat; //this is used to prevent the image from repeating it self to fit the space.
  background-position: 0 0; //this is used to position the image.
  background-size:
```

And that was it for the challenge, and since there was still time for the deadline, some extra functions were added.

A Flipcard.
```html
  <div class="container">
    <div class="card">
      <div class="front-face"><div>
      <div class="back-face"><div>
    </div>
  </div>
```
and the back-face facing back using in CSS transform: rotateY(180deg) and backface-visibility: hidden;
and making it turn in CSS with a if statement using the button's id.
```js
function flipCard(id) {
    let cardRef = document.querySelector(".card");
    let pageRef = document.querySelector("#"+id);
    let buttonRef = document.querySelectorAll(".page__button");

    buttonRef.forEach((item) => item.classList.remove("active__page")); //to clear any changes that happened before.

    if (id == "faq__button"){
        cardRef.style.transform = "none";
        pageRef.classList.add("active__page")
        // whiteBoxRef.style.height = "36rem";
        clearError();
    };
    if (id == "signup__button"){
        cardRef.style.transform = "rotateY(180deg)";
        pageRef.classList.add("active__page");
        // whiteBoxRef.style.height = "45rem";
    }
}
```

On the back-face of the card a sign up form was added.
```html
<div class="form-container">
  <div class="form-header"></div>
  <div class="form-box">
    <div class="input-box">
      <input class="inputarea" type="text">
      <span>icon</span>
    </div>
    <span class="error-message"></span>
  </div>
</div>
```
and added some validation in JavaScript and show an error message and icon if the input is not filled correctly

Also a DARK/LIGHT theme switch button was added
```html
<div class="container">
  <div class="toggle__container">
      <div id="toggle">
          <i class="indicator"></i>
      </div>
  </div>
</div>
```

for this a jquery toggle() method was used.
```js
function toggleTheme() {
    const container = document.querySelector('.container');

    toggle.classList.toggle('active__theme');
    container.classList.toggle('active__theme');
}
```

### Continued development

For my next projest I intend to focus more in jquery and API usage

## Author

- Github - [Felipe Martini](https://github.com/felipeMrtni)
- Frontend Mentor - [felipeMrtni](https://www.frontendmentor.io/profile/felipeMrtni)
- Linkedin - [Felipe Martini](https://www.linkedin.com/in/felipe-campana-martini/)

## Acknowledgments

Huge thanks to all colleagues in comunity Comunidade Code, who would always try to help and were there to see all the times I was trying to fix and error and found out it was a mistype.
