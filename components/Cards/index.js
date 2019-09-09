// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
// https://lambda-times-backend.herokuapp.com/articles
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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    // console.log(response); //see the object from axios

    const arrayKeys = Object.keys(response.data.articles); //use object.keys method to get array of article catagories
    const articleObjects = response.data.articles // array of objects, that holds info

    // console.log(arrayKeys); //see the array catagories
    // console.log(articleObjects); //see the array of catagories and info 

    arrayKeys.forEach(e =>{ //cycle through article catagories ie. javascript
        articleObjects[e].forEach(obj=>{ //cycle through the object data in those catagories, ie. the 4 articles in javascript
            const newCard = infoCard(obj)   // invoke the card function and assign to variable, line 54
            cardContainer.appendChild(newCard) //put the created card in the html, line51
            // console.log(e); //what does this look like?
        })
    })
})
.catch(error => {
    console.log('data returned', error);
});


//grab the anchor in the index.html to insert the card
const cardContainer = document.querySelector('.cards-container');

//function to create the card
function infoCard(obj) {
    const iCard = document.createElement('div');
    iCard.classList.add('card');

    const iHeadline = document.createElement('div');
    iHeadline.classList.add('headline');
    iCard.append(iHeadline);
    iHeadline.textContent = `${obj.headline}`;

    const iAuthor = document.createElement('div');
    iAuthor.classList.add('author');
    iCard.append(iAuthor);

    const iImgBox = document.createElement('div');
    iImgBox.classList.add('img-container');
    iAuthor.append(iImgBox);

    const iImg = document.createElement('img');
    iImgBox.append(iImg);
    iImg.src = `${obj.authorPhoto}`;

    const iName = document.createElement('span');
    iAuthor.append(iName);
    iName.textContent = `${obj.authorName}`;

    return iCard;
}
