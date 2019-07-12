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

const promiseA = axios.get('https://lambda-times-backend.herokuapp.com/articles')
promiseA.then(data=>{
    console.log(data.data.articles.length)
    data.data.articles.bootstrap.forEach(element => {
        const cards = document.querySelector('.cards-container')
        console.log(element)
        cards.appendChild(card(element))
        
    });
    data.data.articles.javascript.forEach(element => {
        const cards = document.querySelector('.cards-container')
        console.log(element)
        cards.appendChild(card(element))

    });
    data.data.articles.technology.forEach(element => {
        const cards = document.querySelector('.cards-container')
        console.log(element)
        cards.appendChild(card(element))

    });
    data.data.articles.jquery.forEach(element => {
        const cards = document.querySelector('.cards-container')
        console.log(element)
        cards.appendChild(card(element))

    });
    data.data.articles.node.forEach(element => {
        const cards = document.querySelector('.cards-container')
        console.log(element)
        cards.appendChild(card(element))

    });
    console.log(data.data.articles)
})

function card (obj){
    cardDiv = document.createElement('div')
    headDiv = document.createElement('div')
    authDiv = document.createElement('div')
    imgDiv = document.createElement('div')
    img = document.createElement('img')
    authSpan = document.createElement('span')

    cardDiv.appendChild(authDiv)
    cardDiv.appendChild(headDiv)
    cardDiv.appendChild(imgDiv)
    imgDiv.appendChild(img)
    cardDiv.appendChild(authSpan)

    cardDiv.classList.add('card')
    headDiv.classList.add('headline')
    authDiv.classList.add('author')
    imgDiv.classList.add('img-container')

    img.src = obj.authorPhoto
    headDiv.textContent = obj.headline
    authSpan.textContent = obj.authorName

    return cardDiv

}