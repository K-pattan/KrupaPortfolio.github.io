function welcome() {
    document.querySelector(".card").style.transform = "scale(1.05)";
    document.querySelector(".card").style.transition = "0.5s";
}

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById("theme-icon");

    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
}
