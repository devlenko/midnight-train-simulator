const wakeUpBtn = document.getElementById("wake-up-btn");

let xLimit = window.innerWidth - wakeUpBtn.getBoundingClientRect().width;
let yLimit = window.innerHeight - wakeUpBtn.getBoundingClientRect().height;

const timeText = document.getElementById("time-left");
let timeLeft = 5;

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

wakeUpBtn.addEventListener("pointerdown", () => {
    const newX = Math.floor(Math.random() * (xLimit + 1));
    const newY = Math.floor(Math.random() * (yLimit + 1));

    wakeUpBtn.style.left = `${newX}px`;
    wakeUpBtn.style.top = `${newY}px`;

    timeLeft = 5;
    timeText.textContent = timeLeft;

    topEyelidAnim.currentTime = 0;
    bottomEyelidAnim.currentTime = 0;
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