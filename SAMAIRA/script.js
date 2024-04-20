document.addEventListener("DOMContentLoaded", function () {
  alert(`Hi Darling !

  You’re so close to getting done with your exams. You’ve been working so hard and I’m really proud of you. It’s not like you don’t already know what I would want to say to you, everytime you call we make sure both of us know what’s going on. And what’s going on is that I Love You. Weak words, because they absolutely do not encompass the magnitudes of love and affection I feel for you.
  
  Keep pushing forward, you're almost at the finish line. When you're done, we'll celebrate all your hard work. While you’re travelling to places while sitting, I want to travel to each one of them, with you !  Just a little bit longer, and this chapter of your journey will be complete. I believe in you more than words can express, and I'll be right here cheering you on every step of the way. You are incredible, and I love you more than ever.
  
  Study Hard & Ace It !
  
  Darling I miss you, your presence, your voice and so much more. But I know soon enough, you’ll be all mine. 
  
  With Loads of Patience &
  With Loads & Loads of Love 
  Adi`);

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
