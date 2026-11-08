const wakeUpBtn = document.getElementById("wake-up-btn");

let xLimit = window.innerWidth - wakeUpBtn.getBoundingClientRect().width;
let yLimit = window.innerHeight - wakeUpBtn.getBoundingClientRect().height;

const timeText = document.getElementById("time-left");
let timeLeft = 5;

wakeUpBtn.addEventListener("pointerdown", () => {
    const newX = Math.floor(Math.random() * (xLimit + 1));
    const newY = Math.floor(Math.random() * (yLimit + 1));

    wakeUpBtn.style.left = `${newX}px`;
    wakeUpBtn.style.top = `${newY}px`;

    timeLeft = 5;
    timeText.textContent = timeLeft;
});

const endScreen = document.getElementById("end-screen");
endScreen.style.display = "none";

const timer = setInterval(() => {
    timeLeft--;
    timeText.textContent = timeLeft;

    if (timeLeft <= 0) { 
        clearInterval(timer);
        endScreen.style.display = "block";
    }
}, 1000)