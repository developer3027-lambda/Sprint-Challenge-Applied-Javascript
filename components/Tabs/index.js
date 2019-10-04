// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {

    tabInfo = response.data.topics

    tabInfo.forEach(item => {
        const newTab = tabs(item);
        tabTopics.appendChild(newTab);
    })
})
.catch(function (error) {
    console.log('error from tab axios:', error);
})

const tabTopics = document.querySelector('.topics');

function tabs(item) {

    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = `${item}`

    return tabDiv
}


