# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Add solution URL here](https://github.com/MarshPeter/FMDashboard)

## My process

1. First step was to investigate several different topics that related to this project. These topics included:

- mobile first versus desktop first designs (chose mobile first design)
- recommendations on CSS naming conventions (Chose BEM)
- investigate accessibility features to keep in mind

2. Next I laid out my HTML that my project was going to use
3. Afterword I created the CSS for the smaller resolution phones
4. Next I expanded the screen width for mobile into tablet resolutions and made small adjustsments as the
screensize got progressively wider.
5. Next I made the desktop layout.
6. Lastly I setup the javascript for the project to make it work with the data.json file (in chrome only since
firefox doesn't support 'assert's. In future I will just use fetch instead of being lazy about things).
7. Small touchups.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- javascript

### What I learned

There were several things I learned about that assisted me in completing this project.

- I tried to incorporate BEM class naming conventions for my css file. This assisted me greatly in the end,
as when the project was getting close to completion, I realised that I had a hover concern. This resulted in me having
to make a messy fix using javascript to get overlapping hover effects to work together well. With the BEM naming convention
I abstracted from my hover effect in section-description, into another class name that I proceeded to remove and add with javascript when it was appropriate to do so to get the hover colour working.

```css
.section-description {
    display: flex;
    flex-direction: column;
    padding: 10px 20px 20px 20px;
    background-color: var(--dark-blue);
    border-radius: 15px;
    position: relative;
    /* moves the section description ontop of the decoration
    and then removes the left over margin */
    top: -40px;
    margin-bottom: -40px;
    cursor: pointer;
}

/* this is so it can be removed in javascript when the internal elipses is hovered */ 
.section-description--hover:hover {
    background-color: var(--desaturated-blue);
}
```

- I also made the conscious choice to utilise flexbox for my styling. This is because the mobile design was a column and
I believed that the sections could be fit into a single flex row that wraps onto itself. This was mostly a success with
me making some design choices that ended up biting me later down the line.

- Lastly, I wanted to organise my files better, and this was the main purpose behind using this project, as it enabled me a small project to test out the idea of doing so. This was a very effective measure, and I will be aiming to further improve file organisation by trying out a SASS compiler for CSS in my next project, and perhaps a javascript compilation alternative as well.

### Useful resources

- [Reddit comment on the idea of mobile versus desktop lead implementation](https://www.reddit.com/r/Frontend/comments/yeccgh/comment/itymqrd/?utm_source=share&utm_medium=web2x&context=3) - This reddit comment helped me identify the direction I should go with whether I should to mobile or desktop first designs. It in my amatuer opinion holds quite a lot of quick lessons about flow of web pages and the order in which to do things. It is quite a mean spirited reply though.
- [File organisation guide](https://appcropolis.com/blog/organize-html-css-javascript-files) - I tried really hard to organise my coding files better this time, and this link gave me direction on how to go about doing it. Overall I think it was very successful all things considered. However my javascript and css files were already getting very hard to follow with such a small design, and in future I may try to come up with ways to compile those from seperate files into one (Perhaps with SASS for css, but I don't really know of alternatives for javascript at this current time).

## Author

- Frontend Mentor - [@MarshPeter](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@FFPeterMF](https://www.twitter.com/FFPeterMF)
