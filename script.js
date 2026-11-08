const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

titleScreen.style.display = "block";

const wakeUpBtn = document.getElementById("wake-up-btn");

let xLimit = window.innerWidth - wakeUpBtn.getBoundingClientRect().width;
let yLimit = window.innerHeight - wakeUpBtn.getBoundingClientRect().height;

const topEyelid = document.querySelector(".eyelid-top");
const bottomEyelid = document.querySelector(".eyelid-bottom");

const endTime = document.getElementById("end-time");

const topEyelidAnim = topEyelid.animate(
    [{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }],
    {
        duration: 5000,
        direction: "normal",
    }
);
topEyelidAnim.pause();
const bottomEyelidAnim = bottomEyelid.animate(
    [{ transform: "translateY(-100%)" }, { transform: "translateY(0)" }],
    {
        duration: 5000,
        direction: "normal",
    }
);
bottomEyelidAnim.pause();

function randomizeEyelidClose() {
    // Pick a random value from 5 to 10 seconds
    const closingMs = Math.floor(Math.random() * 6 + 5) * 1000;

    topEyelidAnim.currentTime = 0;
    topEyelidAnim.effect.updateTiming({ duration: closingMs });
    bottomEyelidAnim.currentTime = 0;
    bottomEyelidAnim.effect.updateTiming({ duration: closingMs });
}

function randomizeBtnPos() {
    const newX = Math.floor(Math.random() * (xLimit + 1));
    const newY = Math.floor(Math.random() * (yLimit + 1));

    wakeUpBtn.style.left = `${newX}px`;
    wakeUpBtn.style.top = `${newY}px`;
}

wakeUpBtn.addEventListener("pointerdown", () => {
    randomizeBtnPos();
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

    stopwatch.textContent = "00:00:00";

    gameTimer = setInterval(() => {
        currentTime = Date.now() - startTime;

        const seconds = Math.trunc(currentTime / 1000 % 60);
        const minutes = Math.trunc(currentTime / 60000 % 60);
        const hours = Math.trunc(currentTime / 3600000);

        stopwatch.textContent = `${`${hours}`.padStart(2, "0")}:${`${minutes}`.padStart(2, "0")}:${`${seconds}`.padStart(2, "0")}`;
    }, 1000);
}

topEyelidAnim.onfinish = () => {
    stopTimer();
    endTime.textContent = stopwatch.textContent;
    
    gameScreen.style.display = "none";
    endScreen.style.display = "block";
};

function startNewGame() {
    titleScreen.style.display = "none";
    gameScreen.style.display = "block";
    endScreen.style.display = "none";

    startTimer();
    randomizeBtnPos();
    randomizeEyelidClose();

    topEyelidAnim.play();
    bottomEyelidAnim.play();
}

for (const btn of document.getElementsByClassName("new-game-btn")) {
    btn.addEventListener("pointerdown", startNewGame);
}