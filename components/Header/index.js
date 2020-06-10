// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerWrap = document.querySelector('.header-container');
// console.log('header, out of function');

function Header() {

    // console.log('header, in of function');

    const timesHeader = document.createElement('div');
    timesHeader.classList.add('header');

    const timesDate = document.createElement('span');
    timesDate.classList.add('date');
    timesDate.textContent='MARCH 28, 2019';
    timesHeader.appendChild(timesDate)

    const timesTitle = document.createElement('h1');
    timesTitle.textContent='Lambda Times';
    timesHeader.appendChild(timesTitle);

    const timesTemp = document.createElement('span');
    timesTemp.classList.add('temp');
    timesTemp.textContent='98°';
    timesHeader.appendChild(timesTemp);

    return timesHeader
}

headerWrap.appendChild(Header());
