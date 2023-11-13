

    // Helper function to get random color
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r},${g},${b},0.8)`;
    }

 
    // Function to move the pre-order sign
    function movePreOrderSign() {
        const randomTop = Math.random() * (window.innerHeight - preOrderSign.offsetHeight);
        const randomLeft = Math.random() * (window.innerWidth - preOrderSign.offsetWidth);

        preOrderSign.style.top = `${randomTop}px`;
        preOrderSign.style.left = `${randomLeft}px`;
    }

    // Function to update main background gradient
    function updateMainBackground() {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const color3 = getRandomColor();
        document.querySelector('main').style.background = `radial-gradient(circle, ${color1}, ${color2}, ${color3})`;
    }

    // Function to update pre-order sign background
    function updatePreOrderSignBackground() {
        const color = getRandomColor();
        preOrderSign.style.background = `rgba(${color.r},${color.g},${color.b},0.5)`;
    }

    // Add click listeners for buttons
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('loginBtn').addEventListener('click', function() {
            window.location.href = 'Login.html';
        });

        // Similar event listeners can be added for other buttons as needed

        // Set intervals for functionality
        setInterval(movePreOrderSign, 2000); // Move pre-order sign every 2 seconds
        setInterval(updateMainBackground, 2000); // Change main background every 2 seconds
        setInterval(updatePreOrderSignBackground, 2000); // Change pre-order sign background every 2 seconds
    });

