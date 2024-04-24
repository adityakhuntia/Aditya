document.addEventListener("DOMContentLoaded", function () {
  alert(`Aeee 17 saal ki choti choti bachi ! Padhle Samaira Padhle 
Love You 
Adi:) `);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

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

  function loadUniqueRandomImages() {
    const totalImages = 67; // Total number of images available (58 - 30 + 1)
    const imagesPerPage = 11; // Number of images per row
    const containerIds = ["row-1", "row-2", "row-3", "row-4", "row-5", "row-6"]; // Adjust as needed based on total rows
    const imageIndices = Array.from({ length: totalImages }, (_, i) => i); // Generate image indices array starting from 30

    const shuffledIndices = shuffle(imageIndices);

    containerIds.forEach((containerId) => {
      const primaryContainer = document.getElementById(containerId);
      const secondaryContainer = document.getElementById(containerId + "-s");
      primaryContainer.innerHTML = "";
      secondaryContainer.innerHTML = "";

      for (let i = 0; i < imagesPerPage; i++) {
        const randomIndex = shuffledIndices.pop();
        if (randomIndex === undefined) return;
        const img = document.createElement("img");
        img.setAttribute("loading", "lazy");
        img.src = `WEB/${randomIndex}.jpg`;
        img.alt = `cat${randomIndex}`;
        primaryContainer.appendChild(img.cloneNode());
        secondaryContainer.appendChild(img);
      }
    });

    addImageClickEvent();
  }

  loadUniqueRandomImages();

  var modal = document.getElementById("modal");
  var closeBtn = document.getElementById("close");

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
