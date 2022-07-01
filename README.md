# List and Stats of DOTA2 Heroes
---
A page to view a list of DOTA2 Heroes and display a scatter chart to show popularity and success-rate of each hero.
### Table of Contents
- [Introduction]
- [Technologies]
- [Illustrations]
- [Learning Challenges]
- [Points to Improve]

#### Introduction
The aim of this project was to see if I could incorporate as much of what I've learnt during Unit 1 of my General Assembly (GA) Software Engineering Immersive Flex (SEIF) program.

Things I've included to practise:
- API Call
- DOM Manipulation
- Programmatically push template literal code HTML into HTML file
- Array manipulation
- Configuring library code to suit my needs
- Refactoring of code
- Constructor Class
- Init function
- CSS without Bootstrap

#### Technologies
- Javascript
- HTML
- CSS
- Chart.js

#### Illustrations
Heroes List on page load
[!heroes-list](./images/list-of-heroes.png)

Ability to dynamically filter Heroes List based on attributes (Strength, Agility, Intelligence)
[!heroes-list](./images/list-of-heroes-multiple-filters.png)

Ability to search for Heroes
[!heroes-list](./images/list-of-heroes-search.png)

Chart of Picks and Win-Rate
[!heroes-list](./images/list-of-heroes-search.png)

Ability to search for Heroes
[!heroes-list](./images/DOTA2Charts-Search-AdobeExpress-L.gif)

#### Learning Challenges
- Able to create 2 constructor classes with 1 being used in the other
- Able push API call data in to constructor class
- Able to filter API call data to only what I needed
- Some CSS animations, where on mouse-hover, Hero Name is displayed
- Manipulate just 1 array for all the different functions
- Call respective functions in init()


#### Points to Improve
- Filter-by-attributes button still shows and is clickable even when modal is displayed
- For the chart, when using search input, rather than filtering out all the Heroes, keep all Heroes on the chart but grey out the non-relevant Heroes