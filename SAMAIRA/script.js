document.addEventListener("DOMContentLoaded", function () {
  // Function to generate a random permutation of numbers

  alert(
    "Samairaaa! How's it going ( tu toh bata nahin payegi big L) \n \n All The Best ! \n \n Heya Love! Here's to Us ! ... \nBTW Tech Update : Just press on an image to zoom it :) ... \n Study Hard & Ace it \n\n With Loads of Love \n Americano Khuntia"
  );

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to add click event to images to open in modal
  function addImageClickEvent() {
    var images = document.querySelectorAll(
      ".carousel-primary img, .carousel-secondary img"
    );
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        var src = this.getAttribute("src");
        document.getElementById("modal-image").setAttribute("src", src);
        modal.style.display = "block";
      });
    });
  }

  // Function to load unique random images
  function loadUniqueRandomImages() {
    const totalImages = 36; // Total number of images available
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

    // Call function to add click event to images after they have been loaded
    addImageClickEvent();
  }

  // Call the function to load unique random images when the page is loaded
  loadUniqueRandomImages();

  // Modal functionality
  var modal = document.getElementById("modal");
  var closeBtn = document.getElementById("close");

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
});
