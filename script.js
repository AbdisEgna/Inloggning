const baloUsername = "Bella";
const baloPassword = "qwe123";

const loginForm = document.getElementById("LoginForm");
const welcomeMessage = document.getElementById("welcomeMessage");
const logoutButton = document.getElementById("logoutButton");
const shokansoParagraph = document.querySelector(".shokanso");

// Check if the user is already logged in and display the appropriate elements
const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

if (storedUsername === baloUsername && storedPassword === baloPassword) {
    loginForm.style.display = "none";
    welcomeMessage.style.display = "block";
    logoutButton.style.display = "block";
    shokansoParagraph.classList.remove("shokanso");
    welcomeMessage.classList.add("small-border");
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === baloUsername && password === baloPassword) {
        // Store login information in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        loginForm.style.display = "none";
        welcomeMessage.style.display = "block";
        logoutButton.style.display = "block";
        shokansoParagraph.classList.remove("shokanso");
        welcomeMessage.classList.add("small-border");
    } else {
        alert("Invalid username or password. Please try again.");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
});

logoutButton.addEventListener("click", function () {
    // Clear stored login information
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    loginForm.style.display = "block";
    welcomeMessage.style.display = "none";
    logoutButton.style.display = "none";
    shokansoParagraph.classList.add("shokanso");
    welcomeMessage.classList.remove("small-border");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});
