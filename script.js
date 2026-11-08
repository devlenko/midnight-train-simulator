const wakeUpBtn = document.getElementById("wake-up-btn");

let xLimit = window.innerWidth - wakeUpBtn.getBoundingClientRect().width;
let yLimit = window.innerHeight - wakeUpBtn.getBoundingClientRect().height;

wakeUpBtn.addEventListener("pointerdown", () => {
    const newX = Math.floor(Math.random() * (xLimit + 1));
    const newY = Math.floor(Math.random() * (yLimit + 1));

    wakeUpBtn.style.left = `${newX}px`;
    wakeUpBtn.style.top = `${newY}px`;
});