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
  
  // This ensures the DOM is fully built before we try to manipulate it.
  document.addEventListener('DOMContentLoaded', changeBackgroundImages);
  