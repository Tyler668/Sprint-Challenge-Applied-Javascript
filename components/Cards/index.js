import { create } from "domain";

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

function createCard(cardObject) {
    // Create elements ===
    const baseCard = document.createElement('div');
    const headline = document.createElement('div');
    const authorInfo = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');


    // Structuring elements === 
    baseCard.appendChild(headline);
    baseCard.appendChild(authorInfo);
    authorInfo.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorInfo.appendChild(authorName);


    // Applying classes to elements ===
    baseCard.classList.add('card');
    headline.classList.add('headline');
    authorInfo.classList.add('author');
    imgContainer.classList.add('img-container');


    // Filling element content ===
    headline.textContent = cardObject.headline;
    img.src = cardObject.authorPhoto;
    authorName.textContent = `By ${cardObject.authorName}`;


    return baseCard;

}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        //Was breaking unless I did these individually and 
        // I'm on a time constraint so blegh 

        response.data.articles.javascript.forEach(element=>{
            cardsContainer.appendChild(createCard(element));
        });

        response.data.articles.bootstrap.forEach(element=>{
            cardsContainer.appendChild(createCard(element));
        });

        response.data.articles.jquery.forEach(element=>{
            cardsContainer.appendChild(createCard(element));
        });

        response.data.articles.node.forEach(element=>{
            cardsContainer.appendChild(createCard(element));
        });

        response.data.articles.technology.forEach(element=>{
            cardsContainer.appendChild(createCard(element));
        });
    });


//REMEMBER TO UNCOMMENT TOP THING