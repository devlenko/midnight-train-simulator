const wakeUpBtn = document.getElementById("wake-up-btn");

let xLimit = window.innerWidth - wakeUpBtn.getBoundingClientRect().width;
let yLimit = window.innerHeight - wakeUpBtn.getBoundingClientRect().height;

const topEyelid = document.querySelector(".eyelid-top");
const bottomEyelid = document.querySelector(".eyelid-bottom");

const topEyelidAnim = topEyelid.animate(
    [{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }],
    {
        duration: 5000,
        direction: "normal",
    }
);
const bottomEyelidAnim = bottomEyelid.animate(
    [{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }],
    {
        duration: 5000,
        direction: "normal",
    }
);

function randomizeEyelidClose() {
    // Pick a random value from 5 to 10 seconds
    const closingMs = Math.floor(Math.random() * 6 + 5) * 1000;

    topEyelidAnim.currentTime = 0;
    topEyelidAnim.effect.updateTiming({ duration: closingMs });
    bottomEyelidAnim.currentTime = 0;
    bottomEyelidAnim.effect.updateTiming({ duration: closingMs });
}

wakeUpBtn.addEventListener("pointerdown", () => {
    const newX = Math.floor(Math.random() * (xLimit + 1));
    const newY = Math.floor(Math.random() * (yLimit + 1));

    wakeUpBtn.style.left = `${newX}px`;
    wakeUpBtn.style.top = `${newY}px`;

    randomizeEyelidClose();
});

const stopwatch = document.getElementById("stopwatch");
let gameTimer = null;

function stopTimer() {
    clearInterval(gameTimer);
    gameTimer = null;
};

function startTimer() {
    let startTime = Date.now();
    let currentTime = 0;

    gameTimer = setInterval(() => {
        currentTime = Date.now() - startTime;

        const seconds = Math.trunc(currentTime / 1000 % 60);
        const minutes = Math.trunc(currentTime / 60000 % 60);
        const hours = Math.trunc(currentTime / 3600000);

        stopwatch.textContent = `${`${hours}`.padStart(2, "0")}:${`${minutes}`.padStart(2, "0")}:${`${seconds}`.padStart(2, "0")}`;
    }, 1000);
}

startTimer();

const endScreen = document.getElementById("end-screen");
endScreen.style.display = "none";

topEyelidAnim.onfinish = () => {
    endScreen.style.display = "block";
    stopTimer();
};