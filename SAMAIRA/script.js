document.addEventListener("DOMContentLoaded", function () {
  // Function to generate a random permutation of numbers
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to load unique random images
  function loadUniqueRandomImages() {
    const totalImages = 30; // Total number of images available
    const imagesPerPage = 5; // Number of images per row
    const containerIds = ["row-1", "row-2", "row-3", "row-4", "row-5", "row-6"]; // IDs of containers
    const imageIndices = Array.from({ length: totalImages }, (_, i) => i + 1); // Generate image indices array

    // Shuffle the image indices array
    const shuffledIndices = shuffle(imageIndices);

    // Loop through each container
    containerIds.forEach((containerId) => {
      const primaryContainer = document.getElementById(containerId);
      const secondaryContainer = document.getElementById(containerId + "-s");
      primaryContainer.innerHTML = ""; // Clear previous images
      secondaryContainer.innerHTML = ""; // Clear previous images

      // Loop to add unique random images
      for (let i = 0; i < imagesPerPage; i++) {
        const randomIndex = shuffledIndices.pop(); // Get the last index from the shuffled array
        if (randomIndex === undefined) return; // Break if all images are used
        const img = document.createElement("img");
        img.src = `WEB/${randomIndex}.jpg`; // Set image source
        img.alt = `cat${randomIndex}`; // Set alt attribute
        primaryContainer.appendChild(img.cloneNode()); // Append cloned image to primary container
        secondaryContainer.appendChild(img); // Append image to secondary container
      }
    });
  }

  // Call the function to load unique random images when the page is loaded
  loadUniqueRandomImages();
});

// Get the modal element
var modal = document.getElementById("modal");

// Get the close button
var closeBtn = document.getElementById("close");

// Get all the images with class "gallery-image"
var images = document.querySelectorAll(".carousel-primary img");

// Loop through each image and attach a click event listener
images.forEach(function (image) {
  image.addEventListener("click", function () {
    // Get the src attribute of the clicked image
    var src = this.getAttribute("src");

    // Set the src attribute of the modal image
    document.getElementById("modal-image").setAttribute("src", src);

    // Show the modal
    modal.style.display = "block";
  });
});

// When the user clicks on the close button, close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
