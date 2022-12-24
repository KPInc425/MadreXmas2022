const snowContainer = document.querySelector('.snowContainer');

const snowFlakes = ['&#10052', '&#10053', '&#10054'];

const random = (num) => {
    return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
    const top = random(100);
    const left = random(100);
    const dur = random(10) + 10;
    const size = random(25) + 25;
    return  `
            top: -${top}%;
            left: ${left}%;
            font-size: ${size}px;
            animation-duration: ${dur}s;
            `;
}

const createSnow = (num) => {
    for (let i = num; i > 0; i--) {
        let snow = document.createElement("div");
        snow.classList.add('snow');
        snow.style.cssText = getRandomStyles();
        snow.innerHTML = snowFlakes[random(2)];
        snowContainer.appendChild(snow);
    }

}

const removeSnow = () => {
    snowContainer.style.opacity = "0";
    setTimeout(() => {
        snowContainer.remove();
    }, 1000)
}

window.addEventListener('load', () => {
    createSnow(60);
});

window.addEventListener("click", () => {
    removeSnow();
})

