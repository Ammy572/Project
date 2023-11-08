const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const shuffleButton = document.getElementById('shuffle');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');

// Get all <source> elements in the audio tag
const sources = audio.querySelectorAll('source');
let currentSourceIndex = 0;

function playAudio() {
    // Set the audio source to the current source index and play
    audio.src = sources[currentSourceIndex].src;
    audio.load(); // Load the audio source
    audio.play(); // Play the audio
}

playButton.addEventListener('click', () => {
    playAudio();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

shuffleButton.addEventListener('click', () => {
    // Shuffle the order of the <source> elements
    shuffleSources();
    playAudio();
});

nextButton.addEventListener('click', () => {
    // Move to the next <source> element and play
    currentSourceIndex = (currentSourceIndex + 1) % sources.length;
    playAudio();
});

backButton.addEventListener('click', () => {
    // Move to the previous <source> element and play
    currentSourceIndex = (currentSourceIndex - 1 + sources.length) % sources.length;
    playAudio();
});

function shuffleSources() {
    // Shuffle the order of the <source> elements
    for (let i = sources.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = sources[i].src;
        sources[i].src = sources[j].src;
        sources[j].src = temp;
    }
}
