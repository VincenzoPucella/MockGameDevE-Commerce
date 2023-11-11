document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const errorContainer = document.getElementById("errorContainer");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "Admin" && password === "1234") {
            // Successful login
            window.location.href = "Home.HTML";
            // Play animation as transition to Home.HTML

        } else {
            // Show the error container
            errorContainer.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const errorContainer = document.getElementById("errorContainer");
    const body = document.body;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "Admin" && password === "1234") {
            // Apply fade-out animation to the whole body
            body.classList.add("fade-out");

            // Wait for the animation to finish before redirecting to Home.HTML
            setTimeout(function() {
                window.location.href = "Home.HTML";
            }, 500); // 500ms matches the animation duration

        } else {
            // Show the error container
            errorContainer.style.display = "block";
        }
    });
});
