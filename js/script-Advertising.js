document.addEventListener('DOMContentLoaded', function() {
    const carouselImage = document.getElementById('carouselImage');
    const dynamicText = document.getElementById('dynamicText');
    const staticText = document.getElementById('staticText');
    const orderButton = document.getElementById('orderButton');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    let currentImageIndex = 0;
    const images = [
        "Images/AdventureCollection/CoverPage.webp",
        "Images/ChessFPSCollection/852007d7-5672-48ce-8fc0-a4463c409c26.webp",
        "Images/HorrorGameCollection/CoverPage.webp",
        "Images/PokerCollection/PokerAlienCover.webp",
        "Images/PuzzlePlatformCollection/CoverPage.webp",
        "Images/SimulationCollection/Cover.webp"
    ];

    let currentTextIndex = 0;
    const texts = ["For", "limited", "time", "only", "For limited time only"];

    // Function to update the dynamic text
    function updateText() {
        if (currentTextIndex < texts.length) {
            dynamicText.innerText = texts[currentTextIndex];
            currentTextIndex++;
        } else {
            clearInterval(textInterval);
            dynamicText.style.display = 'none';
            staticText.style.display = 'block';
            orderButton.style.display = 'block';
        }
    }

    // Function to switch to the next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        carouselImage.src = images[currentImageIndex];
    }

    // Event listeners for arrow buttons
    prevArrow.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        carouselImage.src = images[currentImageIndex];
        clearInterval(imageInterval); // Pause automatic image switching
    });

    nextArrow.addEventListener('click', function() {
        nextImage();
        clearInterval(imageInterval); // Pause automatic image switching
    });

    const textInterval = setInterval(updateText, 2000); // Update text every second
    const imageInterval = setInterval(nextImage, 2000); // Change image every 5 seconds

});
