let musicControlDiv = document.querySelector('.music-player')
let latestReleaseItem = document.querySelector('.latest-release-single')
let latestEnglishItem = document.querySelector('.latest-english')
let latestHindiItem = document.querySelector('.latest-hindi')

latestReleaseItem.addEventListener('click', e=>{
    console.log('openPlayerOnClickCalled');
    musicControlDiv.classList.remove('player-hidden')
    console.log("musicControlDiv", musicControlDiv);
})

latestEnglishItem.addEventListener('click', e=>{
    console.log('openPlayerOnClickCalled');
    musicControlDiv.classList.remove('player-hidden')
    console.log("musicControlDiv", musicControlDiv);
})

latestHindiItem.addEventListener('click', e=>{
    console.log('openPlayerOnClickCalled');
    musicControlDiv.classList.remove('player-hidden')
    console.log("musicControlDiv", musicControlDiv);
})

// console.log("musicControlDiv", musicControlDiv);
// const openPlayerOnClick = () =>{
//     console.log('openPlayerOnClickCalled');
//     musicControlDiv.classList.remove('player-hidden')
//     console.log("musicControlDiv", musicControlDiv);
// }