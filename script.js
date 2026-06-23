function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    document.getElementById("theme-toggle").innerHTML =
        isDark ? "☀️" : "🌙";

    document.getElementById("theme-toggle-mobile").innerHTML =
        isDark ? "☀️" : "🌙";
}

window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

        const desktop = document.getElementById("theme-toggle");
        const mobile = document.getElementById("theme-toggle-mobile");

        if (desktop) desktop.innerHTML = "☀️";
        if (mobile) mobile.innerHTML = "☀️";
    }
};
