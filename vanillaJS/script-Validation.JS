document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const loginFormContainer = document.getElementById("loginFormContainer");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "1234") {
            loginFormContainer.style.backgroundColor = "rgba(0, 255, 0, 0.3)"; // Light transparent green
            document.body.classList.add('blurry-transition'); // Add blur transition to the body

            setTimeout(() => {
                window.location.href = "Home.HTML";
            }, 2000);
        } else {
            loginFormContainer.style.backgroundColor = "rgba(255, 0, 0, 0.3)"; // Light transparent red
            loginFormContainer.classList.add("shake"); // Add shake effect
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";

            // Remove shake class after animation completes to allow re-triggering
            setTimeout(() => {
                loginFormContainer.classList.remove("shake");
            }, 500); // 0.5s matches the animation duration
        }
    });
});

