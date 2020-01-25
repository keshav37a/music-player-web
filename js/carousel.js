console.log('test');
const track = document.querySelector('.carousel-track');
console.log('track', track);
const slides = Array.from(track.children);
console.log('slides', slides);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

prevButton.classList.add('invisible');

console.log('nextButton', nextButton);
console.log('prevButton', prevButton);
console.log('dotsNav', dotsNav);
console.log('dots', dots);
console.log('slideSize', slideSize);
console.log('slideWidth', slideWidth);

console.log(track);
console.log(slides);

//arrange the slides next to one another

// let dist = 0;
// for(let i=0; i<slides.length; i++){
//     console.log("dist", dist);
//     slides[i].style.left = dist+'px';
//     dist += slideWidth;
// }
const setSlidePosition = (slide, index)=>{
    slide.style.left = slideWidth*index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) =>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) =>{
    if(targetIndex==0){
        prevButton.classList.add('invisible');
        nextButton.classList.remove('invisible');
    }
    else if(targetIndex==slides.length-1){
        prevButton.classList.remove('invisible');
        nextButton.classList.add('invisible');
    }
    else{
        prevButton.classList.remove('invisible');
        nextButton.classList.remove('invisible');
    }
}

nextButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide')
    prevButton.classList.remove('invisible');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);


    moveToSlide(track, currentSlide, nextSlide);    
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide')
    nextButton.classList.remove('invisible');

    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);


    moveToSlide(track, currentSlide, prevSlide); 
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})


// when I click the new indicators, move to that slide
dotsNav.addEventListener('click', e=>{
    //what indicator was clicked on
    const targetDot = e.target;
    // console.log(e.target);

    //checking if in the dotnav area we clicked on a button or not
    if(!targetDot)
        return;
    
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    if(targetIndex===0){
        prevButton.classList.add('invisible');
        nextButton.classList.remove('invisible');
    }
    else if(targetIndex==slides.length-1){
        nextButton.classList.add('invisible');
        prevButton.classList.remove('invisible');
    }
    else{
        nextButton.classList.remove('invisible');
        prevButton.classList.remove('invisible');
    }
    moveToSlide(track, currentSlide, targetSlide);    
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    console.log(targetIndex);
})




// slides[0].style.left = 0;
// slides[1].style.left = slideWidth+'px';


//when I click left move slides to the left
//when I click left move slides to the right
//when I click the nav indicators move to that slide