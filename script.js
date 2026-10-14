const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    message.textContent = "خوش آمدی " + username + "!";
    message.style.color = "green";
});