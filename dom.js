// reference page is google.com

// DOM MANIPULATION

// 1. Creation
const paragraph = document.createElement('p');

const div_str = "#gws-output-pages-elements-homepage_additional_languages__als"

const langDiv = document.querySelector(div_str);

// content
paragraph.textContent = "This was created with JS"

paragraph
paragraph.innerHTML
paragraph.outerHTML

// attributes
paragraph.setAttribute('style', 'color:red;background-color:blue');
paragraph.setAttribute('id', 'first-paragraph');

paragraph.getAttribute('id');
paragraph.hasAttribute('id');

langDiv.appendChild(paragraph);
document.body.appendChild(paragraph)

// 2. Selections
// getElementby....
// querySelectors
const img = document.querySelector('.lnXdpd')
img.height = 50;

const links = document.querySelectorAll('.pHiOh')

links.forEach(a => {
    console.log(a.href)
})

const search = document.querySelector('input.gNO89b')
search
search.setAttribute('disabled', true);

search

// Listening to Events
links.forEach(a => {
    a.addEventListener('click', (evt) => {
        evt.preventDefault(); // ptevent loading

        alert(evt.target.textContent);
        
    })
})