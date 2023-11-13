function changeBackgroundImages() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.dynamicBackgroundPicture');
  
    // Ensure there are images to toggle
    if (images.length === 0) {
      console.error('No images found with the class .dynamicBackgroundPicture');
      return;
    }
    
    setInterval(() => {
      // Hide all images
      images.forEach(image => image.style.display = 'none');
      // Show the next image
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.display = 'block';
    }, 5000); // Changes every 5 seconds
  }
  
  function changeContainersAndImages() {
    let currentIndex = 0;
    const containers = document.querySelectorAll('[data-image-selector]'); // Select all containers with a data-image-selector attribute

    // Ensure there are containers to toggle
    if (containers.length === 0) {
      console.error('No containers found');
      return;
    }

    setInterval(() => {
      containers.forEach((container, index) => {
        const imageSelector = container.getAttribute('data-image-selector');
        const image = document.querySelector(imageSelector); // Select the image based on the data attribute

        if (container && image) {
          if (index === currentIndex) {
            container.classList.add('active');
            image.classList.add('active'); // Add 'active' class to image
          } else {
            container.classList.remove('active');
            image.classList.remove('active'); // Remove 'active' class from image
          }
        }
      });

      // Update the current index
      currentIndex = (currentIndex + 1) % containers.length;
    }, 5000); // Changes every 5 seconds
}

// This ensures the DOM is fully built before we try to manipulate it.
document.addEventListener('DOMContentLoaded', changeContainersAndImages);


// This ensures the DOM is fully built before we try to manipulate it.
document.addEventListener('DOMContentLoaded', changeBackgroundImages);
  
