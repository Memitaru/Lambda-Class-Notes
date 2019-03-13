/*
* Query Selectors
*/

// const homeLink = document.getElementById('home-tag');
// console.log(homeLink);

// const navItems = document.getElementsByClassName('nav-item');
// console.log(navItems);

// const anchors = document.getElementsByTagName('a');
// console.log(anchors);

// const h1 = document.querySelector('h1');
// console.log(h1);

// const paragraphs = document.querySelectorAll('p');
// console.log(Array.from(paragraphs));

// const h1 = document.querySelector('h1');
// h1.textContent="test"
// h1.style.fontSize = "40px"
// h1.style.color = 'purple'

// const image = document.querySelector('img');
// image.setAttribute('src', 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350')

// const firstParagraph = document.querySelector('p');
// firstParagraph.style.fontSize = '28px'
// firstParagraph.style.color = 'teal'

// const h2 = document.querySelector('h2');
// h2.style.fontSize = '45px'
// h2.style.color = 'green'


//Dom Element Creation
const newElement = document.createElement('a')

newElement.setAttribute('href', '#')

newElement.textContent = 'New Anchor'

const mainNav = document.querySelector('.main-nav')

newElement.classList.add('Testing')

mainNav.prepend(newElement)