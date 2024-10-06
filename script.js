
const valueInput = document.getElementById("valueInput");
const animateToggle = document.getElementById("animateToggle");
const hideToggle = document.getElementById("hideToggle");
const progressCircle = document.querySelector(".progress-circle-value");
const progressBlock = document.querySelector(".progress-block");

function updateProgress(value) {
    const maxOffset = 283;
    const offset = maxOffset - (value / 100) * maxOffset;
    progressCircle.style.strokeDashoffset = offset;
}

function toggleAnimation() {
    if (animateToggle.checked) {
        progressBlock.classList.add("animated");
    } else {
        progressBlock.classList.remove("animated");
    }
}

function toggleVisibility() {
    if (hideToggle.checked) {
        progressBlock.style.display = "none";
    } else {
        progressBlock.style.display = "block";
    }
}

valueInput.addEventListener("input", (e) => {
    const value = Math.min(Math.max(e.target.value, 0), 100);
    updateProgress(value);
});
animateToggle.addEventListener("change", toggleAnimation);
hideToggle.addEventListener("change", toggleVisibility);

setInterval(() => {
    if (animateToggle.checked) {
        progressBlock.style.transform = `rotate(${Date.now() % 360}deg)`;
    }
}, 20);
