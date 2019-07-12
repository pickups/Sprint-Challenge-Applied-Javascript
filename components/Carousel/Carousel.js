/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let imgSrc = ['assets/carousel/mountains.jpeg',
'assets/carousel/computer.jpeg',
'assets/carousel/trees.jpeg',
'assets/carousel/turntable.jpeg']

let count = 0

function createEl(count){

}
const cara = document.querySelector('.carousel-container')
cara.appendChild(createAll())

function createAll(){
  const carDiv = document.createElement('div')
  const leftDiv = document.createElement('div')
  const rightDiv = document.createElement('div')
  const defaultImg = document.createElement('img')

  carDiv.appendChild(leftDiv)
  carDiv.appendChild(rightDiv)
  carDiv.appendChild(defaultImg)

  rightDiv.classList.add('right-button')
  leftDiv.classList.add('left-button')
  carDiv.classList.add('carousel')

  defaultImg.src = imgSrc[count]
  defaultImg.style.display = "flex"

  rightDiv.addEventListener('click', ()=>{
    defaultImg.src = imgSrc[count+1] 
  })

  leftDiv.addEventListener('click', ()=>{
    if (count == 0){
      defaultImg.src = imgSrc[3]
    }
    if (count == 1) {
      defaultImg.src = imgSrc[2]
    } if (count == 2) {
      defaultImg.src = imgSrc[0]
    } if (count == 3) {
      defaultImg.src = imgSrc[1]
    }
  })
  return carDiv
}