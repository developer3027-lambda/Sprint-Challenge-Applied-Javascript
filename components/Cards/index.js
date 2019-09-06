// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
// https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
})
const cardContainer = document.querySelector('.cards-container');
cardContainer.append(infoCard());

function infoCard(obj) {
    const iCard = document.createElement('div');
    iCard.classList.add('card');

    const iHeadline = document.createElement('div');
    iHeadline.classList.add('headline');
    iCard.append(iHeadline);
    iHeadline.textContent = `{Headline of article}`;

    const iAuthor = document.createElement('div');
    iAuthor.classList.add('author');
    iCard.append(iAuthor);

    const iImgBox = document.createElement('div');
    iImgBox.classList.add('img-container');
    iAuthor.append(iImgBox);

    const iImg = document.createElement('img');
    iImgBox.append(iImg);
    iImg.src = `{url of authors image}`;

    const iName = document.createElement('span');
    iAuthor.append(iName);
    iName.textContent = `{authors name}`;

    return iCard;
}
