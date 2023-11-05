# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot
![](image.png)

### Links
- Solution URL: [faq-accordion-card] (https://github.com/kelvinmvungi/challenges-FrontendMentor/faq-accordion-card)
- Live Site URL: 

### My Process
I started with writting the HTML and then came to CSS using mobile first approach (although not perfect) and finished the interactivity using Javascript

### Built with 
- Flexbox
- Custom CSS properties
- CSS variables
- Event Listeners
- HTML5

### What I learned 
I learned alot about toggling classes using Javascript that adds or removes styles.
```javascript
document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq .question');
    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('dropdown-visible');
        });
    });
});
```

### Continued Development 
I want to learn more about DOM manipulation using just vanilla javascript

### Useful resources
-[MDN](https://www.mdn.com)


### Author
- X (formerly Twitter) - [DracZihper](https://www.x.com/draczihper)

### Acknowledgments
-