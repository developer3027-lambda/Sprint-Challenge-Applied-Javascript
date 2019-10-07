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
         obj = response.data.articles;

    
        for(let key in obj) {
            let response = obj[key];
            response.forEach(e => {
                const one = newsCard(e)
                cardWrapper.appendChild(one)
            })
        }
    })
.catch((error) => {
    console.log('from axios', error);
})

const cardWrapper = document.querySelector('.cards-container');

function newsCard(e) {

 console.log(e)

    const newsCard = document.createElement('div');
    newsCard.classList.add('card');

    const newsHeadline = document.createElement('div');
    newsHeadline.classList.add('headline');
    newsCard.appendChild(newsHeadline);
    newsHeadline.textContent=`${e.headline}`;

    const newsAuthor = document.createElement('div');
    newsAuthor.classList.add('author');
    newsCard.appendChild(newsAuthor);

    const newsImgBox = document.createElement('div');
    newsImgBox.classList.add('img-container');
    newsAuthor.appendChild(newsImgBox);

    const newsImg = document.createElement('img');
    newsImgBox.appendChild(newsImg);
    newsImg.src=`${e.authorPhoto}`;

    const newsName = document.createElement('span');
    newsAuthor.appendChild(newsName);
    newsName.textContent=`${e.authorName}`;

    return newsCard
}

// cardWrapper.appendChild(newsCard());