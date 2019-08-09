//========================================================================================================================
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images  ------> //No// 
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

//========================================================================================================================
//MAKING THE CAROUSEL ===
//Capture a place for the carousel ===
const carouselContainer = document.querySelector('.carousel-container');

function makeDatCarousel(imgArray) {
  // Create elements ===
  const datCarousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');
  const currentImg = document.createElement('img');

  // Structure elements ===
  datCarousel.appendChild(leftButton);
  datCarousel.appendChild(rightButton);
  datCarousel.appendChild(currentImg);

  // Apply classes ===
  datCarousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // Make current slide visible ===
  currentImg.style.display = 'block';

  leftButton.textContent = '<';
  rightButton.textContent = '>';

  let count = 0;
  currentImg.src = imgArray[count]

  // Left / right logic that replaces the src of the current display:block image with the corresponding image in the array ===
  leftButton.addEventListener('click', e => {
    count++;
    if(count === imgArray.length){count = 0};
    currentImg.src = imgArray[count];
  });

  // Right
  rightButton.addEventListener('click', e => {
    if(count === 0){count = imgArray.length};
    count--;
    currentImg.src = imgArray[count];
  });

  return datCarousel;
}
//========================================================================================================================
// Array of images for carousel, though can take any ===
const images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];
//========================================================================================================================


// Slap it on the carousel div ===
carouselContainer.appendChild(makeDatCarousel(images));

//========================================================================================================================


