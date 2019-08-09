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

const carouselContainer = document.querySelector('.carousel-container');

function makeDatCarousel() {
  // Create elements ===
  const datCarousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');
  const currentImg = document.createElement('img');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');

  // Structure elements ===
  datCarousel.appendChild(leftButton);
  datCarousel.appendChild(rightButton);
  datCarousel.appendChild(currentImg);
  datCarousel.appendChild(img1);
  datCarousel.appendChild(img2);
  datCarousel.appendChild(img3);
  datCarousel.appendChild(img4);


  // Apply classes ===
  datCarousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // Insert content ===
  img1.src = "./assets/carousel/mountains.jpeg";
  img1.textContent = "IMAGE1";
  img2.src = "./assets/carousel/computer.jpeg";
  img2.textContent = "IMAGE2";

  img3.src = "./assets/carousel/trees.jpeg";
  img3.textContent = "IMAGE3";

  img4.src = "./assets/carousel/turntable.jpeg";
  img4.textContent = "IMAGE4";

  // Make current slide visible ===
  currentImg.style.display = 'block';

  leftButton.textContent = '<';
  rightButton.textContent = '>';

  let count = 0;
  currentImg.src = imgArray[count]

  leftButton.addEventListener('click', e => {
    if(count === 3){count = 0};
    count++;
    currentImg.src = imgArray[count];
    

    
  });

  rightButton.addEventListener('click', e => {
    if(count === 0){count = 3};
    count--;
    currentImg.src = imgArray[count];
    

    
  });



  return datCarousel;
}



const imgArray = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];
carouselContainer.appendChild(makeDatCarousel());



