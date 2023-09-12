const slides = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);

let activeSlide = 0;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')


//console.log(sliderImagesEl);

/* Print all images into the dom */
// loop over the slides 
for (let i = 0; i < slides.length; i++) {
    const slidePath = slides[i].foto;
    console.log(slidePath);

    // for each slide we create the markup
    const slideMarkup = `<img class="${activeSlide === i ? 'active' : ''}" src="${slidePath}" alt="">`
    //console.log(slideMarkup);

    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)

}




const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);





const thumbsElement = document.querySelector('.thumbnails')

for (let i = 0; i < slides.length; i++) {
    const thumbPath = slides[i].foto;
    const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${thumbPath}" alt="">`
    //console.log(thumbMarkup);

    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)

}





// intercept click on the next icon 
nextEl.addEventListener('click', function () {
    console.log('cliccato su next');

    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')


    // activeSlide = 4

    if (activeSlide === slidesImages.length - 1) {
        activeSlide = 0
        // activeSlide = 5
    } else {
        // increment the activeSlide of 1
        activeSlide++
    }


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')


    /* TODO */


    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')


})

// intercept click on the prev icon


// activeSlide = 0
prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');


    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    if (activeSlide === 0) {
        activeSlide = slidesImages.length - 1
        // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }


    console.log(activeSlide);


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
})