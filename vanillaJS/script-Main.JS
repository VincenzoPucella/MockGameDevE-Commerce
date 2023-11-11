
document.addEventListener("DOMContentLoaded", function() {
    
    const preOrderSign = document.querySelector('.indexCenterText');
    const dynamicBackgroundPictures = document.querySelectorAll(".dynamicBackgroundPicture");
    const containers = [
        document.getElementById("coverOneContainer"),
        document.getElementById("coverTwoContainer"),
        document.getElementById("coverThreeContainer")
    ];

    const containerImages = [
        [
            "Images/PuzzlePlatformCollection/Gameplay.webp",
            "Images/PuzzlePlatformCollection/CoverPage.webp"
        ],
        [
            "Images/HorrorGameCollection/Gameplay.webp",
            "Images/HorrorGameCollection/CoverPage.webp"
        ],
        [
            "Images/SimulationCollection/GameplayImage.webp",
            "Images/SimulationCollection/Cover.webp"
        ]
    ];
    let currentBackgroundIndex = 0;
    let currentContainerImageIndices = [0, 0, 0];

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

    // Function to rotate background images
    function rotateBackgroundImages() {
        dynamicBackgroundPictures.forEach((img, index) => {
            img.style.display = 'none'; // Hide all images
        });

        // Show the next image
        dynamicBackgroundPictures[currentBackgroundIndex].style.display = 'block';

        // Update the index
        currentBackgroundIndex = (currentBackgroundIndex + 1) % dynamicBackgroundPictures.length;
    }

    // Function to rotate images in each container
    function rotateContainerImages() {
        containers.forEach((container, containerIndex) => {
            let imgs = container.querySelectorAll("img");
            imgs.forEach((img, index) => {
                img.src = containerImages[containerIndex][currentContainerImageIndices[containerIndex]];
            });

            // Update the index
            currentContainerImageIndices[containerIndex] = (currentContainerImageIndices[containerIndex] + 1) % containerImages[containerIndex].length;
        });
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
    document.getElementById('loginBtn').addEventListener('click', function() {
        window.location.href = 'Login.html';
    });

    // Similar event listeners can be added for other buttons as needed

    // Set intervals for functionality
    setInterval(movePreOrderSign, 2000); // Move pre-order sign every 2 seconds
    setInterval(rotateBackgroundImages, 5000); // Rotate background images every 5 seconds
    setInterval(rotateContainerImages, 5000); // Rotate container images every 5 seconds
    setInterval(updateMainBackground, 2000); // Change main background every 2 seconds
    setInterval(updatePreOrderSignBackground, 2000); // Change pre-order sign background every 2 seconds
});

