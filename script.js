// Grab all the necessary elements
const startBtn = document.getElementById('start-btn');
const introSection = document.getElementById('step-1-intro');
const scanSection = document.getElementById('step-2-scanning');
const resultSection = document.getElementById('step-3-result');
const statusText = document.getElementById('status-text');
const progressFill = document.getElementById('progress-fill');
const video = document.getElementById('rickroll-video');
const scanLine = document.getElementById('scan-line');
const placeholderText = document.getElementById('placeholder-text');

// Fake terminal/loading messages to build suspense
const scanMessages = [
    "Activating camera...",
    "Mapping facial landmarks...",
    "Calculating eye distance and jawline ratio...",
    "Accessing global celebrity database...",
    "Cross-referencing 10,000+ profiles...",
    "Analyzing biometric hash...",
    "99.8% Match Found! Decrypting profile..."
];

startBtn.addEventListener('click', () => {
    // 1. Give a quick illusion of the "scanner" turning on
    scanLine.classList.remove('hidden');
    placeholderText.innerText = "Scanning...";
    startBtn.disabled = true;
    startBtn.innerText = "Please wait...";

    // 2. Move to the processing screen after a short delay
    setTimeout(() => {
        introSection.classList.add('hidden');
        scanSection.classList.remove('hidden');
        runFakeScan();
    }, 2000);
});

function runFakeScan() {
    let messageIndex = 0;
    let progress = 0;

    // Change the message and progress bar every 1.5 seconds
    const scanInterval = setInterval(() => {
        statusText.innerText = scanMessages[messageIndex];
        
        progress += (100 / scanMessages.length);
        progressFill.style.width = `${progress}%`;

        messageIndex++;

        // Once we run out of messages, trigger the Rickroll
        if (messageIndex >= scanMessages.length) {
            clearInterval(scanInterval);
            setTimeout(showRickroll, 1500); // Small pause at 100% for dramatic effect
        }
    }, 1500);
}

function showRickroll() {
    scanSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    
    // Inject the YouTube link with ?autoplay=1
    // Note: Because the user clicked the "Start" button earlier, modern browsers 
    // will allow the video to autoplay with sound!
    video.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
}