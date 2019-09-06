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

const header = document.querySelector('.header-container');
header.append(Header());

function Header() {
    const hHeader = document.createElement('div');
    hHeader.classList.add('header');

    const hDate = document.createElement('span');
    hDate.textContent = 'March 28, 2019';
    hHeader.append(hDate);
    hDate.classList.add('date');

    const hTitle = document.createElement('h1');
    hHeader.append(hTitle);
    hTitle.textContent = 'Lambda Times';

    const hTemp = document.createElement('span');
    hTemp.textContent = '98°';
    hHeader.append(hTemp);
    hTemp.classList.add('temp');

    return hHeader;
}
