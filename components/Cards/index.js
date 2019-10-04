// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
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
    // console.log('axios info', response);
    let obj = response.data.articles;
    for (const prop in obj) {
        // console.log(`prop: ${prop}`, obj);
        let cardProp = ([])
        cardProp = prop;
        console.log(cardProp)
//need to cycle through the mess and get the right info to where it needs to go.

        
        const cardObj = obj;
        // console.log('catagory:',cardObj);
        // cardProp.forEach(e => {
        //     cardObj[e].forEach(obj => {
        //         const newCard = newsCard(obj)
        //         cardWrapper.appendChild(newCard)
        //         console.log(obj)
        //     })
        // })
    }
})
.catch((error) => {
    console.log('from axios', error);
})

const cardWrapper = document.querySelector('.cards-container');

function newsCard() {

    const newsCard = document.createElement('div');
    newsCard.classList.add('card');

    const newsHeadline = document.createElement('div');
    newsHeadline.classList.add('headline');
    newsCard.appendChild(newsHeadline);
    newsHeadline.textContent='`${headline}`';

    const newsAuthor = document.createElement('div');
    newsAuthor.classList.add('author');
    newsCard.appendChild(newsAuthor);

    const newsImgBox = document.createElement('div');
    newsImgBox.classList.add('img-container');
    newsAuthor.appendChild(newsImgBox);

    const newsImg = document.createElement('img');
    newsImgBox.appendChild(newsImg);
    newsImg.src='`${authorPhoto}`';

    const newsName = document.createElement('span');
    newsAuthor.appendChild(newsName);
    newsName.textContent='`${authorName}`';

    return newsCard
}

cardWrapper.appendChild(newsCard());