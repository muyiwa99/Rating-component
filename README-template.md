# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Screen shots included in screens folder

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- Dowloaded course content then viewed the design images.
- Broke project down into steps: HTML and css design, then Java last.
- Researched similar projects to understand best way to go about implementing the project.
- Started to implement HTML and CSS process for markup and design.
- Used code from previous code and research to add the rating functionality as well as removing the main container and adding the thank you dialogue when submit is used.
- Made the site responsive
- Ran tests
  -Deployed to Github/Nelify then uploaded to Front end mentor

### Built with

- Semantic HTML5 markup
- Scss- design
- Javascript- Dom Manipulation
- Mobile-first workflow

### What I learned

This project helped me to gain a better understanding into correctly importing my fonts( i hadn't been specifying the weight and style on google fonts), using VW to center my containers, using padding to better position text in boxes, removing and adding containers using JS and passing inputted data f=rom 1 element to the other.

```css
/* A new way to center content  */

display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
flex-direction: column;

/* Making the container responsive, i dint need to add a media query  */

width: min(90%, 760px);
```

```js
// A better understading of how to use the method
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
```

### Continued development

- On future projects i want to build more complex rating components with more options and more functionality and this was a good first step.

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min) - This helped me with the responsiveness of both the main and Thank you dialogue box. I really liked this pattern as i didn't have to implement a media query and will use it going forward.
- [W3schools ](https://www.w3schools.com/jsref/jsref_foreach.asp) - This is an amazing article which helped me finally understand the forEach method. I'd recommend it to anyone still learning this concept.

## Author

- LinkedIN - [Muyiwa Areola](https://www.your-site.com)
- Frontend Mentor - [@Muyiwa99](https://www.frontendmentor.io/profile/muyiwa99)
- Github - [@muyiwa99](https://github.com/muyiwa99)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
