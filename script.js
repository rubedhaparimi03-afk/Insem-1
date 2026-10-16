
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (email === "" || password === "") {
        message.textContent = "Please fill all fields";
        message.style.color = "red";
    } else {
        message.textContent = "Login successful!";
        message.style.color = "green";
    }
});
