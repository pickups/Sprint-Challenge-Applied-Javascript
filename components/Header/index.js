// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


function Header() {
    const header = document.createElement('div')
    const spanDate = document.createElement('span')
    const heading = document.createElement('h1')
    const spanTemp = document.createElement('span')

    header.appendChild(spanDate)
    header.appendChild(heading)
    header.appendChild(spanDate)

    header.classList.add('header')
    spanDate.classList.add('date')
    spanTemp.classList.add('temp')

    

    spanDate.textContent = "SMARCH 28, 2019"
    heading.textContent = "Lambda Times"
    spanTemp.textContent = '98°'

    
    console.log('hello')
    return header
}

const headerContainer = document.querySelector('.header-container')
console.log(headerContainer)
headerContainer.appendChild(Header())