// it works

// Make a div
const wrapper = document.createElement('div');

// add a class of wrapper to it
wrapper.classList.add('wrapper');

// put it into the body
document.body.appendChild(wrapper);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two three" in them
['one', 'two', 'three'].forEach(text => {
  const newLi = document.createElement('li');
  newLi.innerText = text;
  myList.appendChild(newLi);
  // const newHtml = document.createRange().createContextualFragment(`
  //   <li>${text}</li>
  // `);
  // return myList.appendChild(newHtml);
});
// put that list into the above wrapper
wrapper.appendChild(myList);

// create an image
const newImg = document.createElement('img');

// set the source to an image
// set the width to 250
newImg.setAttribute('src', 'https://www.fillmurray.com/250/250');
// add a class of cute
newImg.classList.add('cute');
// add an alt of Cute Puppy
newImg.setAttribute('alt', 'Cute Puppy');
// Append that image to the wrapper
wrapper.appendChild(newImg);

// with HTML string, make a div, with two paragraphs inside of it
const htmlString = `
<div>
  <p>this is the FIRST paragraph</p>
  <p>2nd is just the first loser</p>
</div>
`;
const myFragment = document.createRange().createContextualFragment(htmlString);
console.log(myFragment);
// const newElement = document.createRange().createContextualFragment(htmlString)
// put this div before the unordered list from above
// console.log(newElement)
// myList.insertAdjacentElement('beforebegin', newElement);
wrapper.insertBefore(myFragment, myList);

// add a class to the second paragraph called warning
wrapper.querySelector('div > p:nth-child(2)').classList.add('warning');

// remove the first paragraph
wrapper.querySelector('div > p').remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:

// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

let num = 1;
function generatePlayerCard(name = 'adam', age = num++, height = 6) {
  const newHtml = `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
      <button>delete</button>
    </div>
  `;
  return document.createRange().createContextualFragment(newHtml);
}
// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// Have that function make 4 cards

function make4Cards() {
  for (let i = 0; i < 4; ++i) {
    cardsDiv.appendChild(generatePlayerCard());
  }
}
make4Cards();
// append those cards to the div
// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
function deleteMyParent() {
  this.parentNode.remove();
}

cardsDiv.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', deleteMyParent);
  // button.parentNode.remove()
});
