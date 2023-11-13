document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const loginFormContainer = document.getElementById("loginFormContainer");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "1234") {
            loginFormContainer.style.backgroundColor = "rgba(0, 255, 0, 0.3)"; 
            document.body.classList.add('blurry-transition'); 

            setTimeout(() => {
                window.location.href = "Home.HTML";
            }, 2000);
        } else {
            loginFormContainer.style.backgroundColor = "rgba(255, 0, 0, 0.3)"; 
            loginFormContainer.classList.add("shake"); 
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";

            
            setTimeout(() => {
                loginFormContainer.classList.remove("shake");
            }, 500); 
        }
    });
});

