document.addEventListener("DOMContentLoaded", function () {
  alert(`Samairaaaa !!!Perhaps this message brings a smile to your face. I just wanted to tell you how much I miss you. It's been a while since we last met and I can't wait to hold you in my arms again. Hold you like you're mine. I wanna hold your hand, see your face, your smile, see you, hear your voice and your laughs and give you a big tight tight hug 
  
  Somehow the nervousness and excitement they're peaking for me as well. But I know you, I know that you've worked hard ( really really hard ) and you're going to give your best shot. I am super proud of you. 
  
  Remember my love, you are intelligent, capable and strong . You're  Samaira so omniscient, always right and smart is a given. I mean that's just who you are. I can imagine the mix of emotions you must be feeling right now. But let me remind you, you are not alone , they're loads of people wishing for your best success, cheering for you and I am one amongst them. You are ready for this !
  
  For the love god darling please please pleaseee don't forget the photos !!!  Try not to take much stress and get done with it like a rockstar. ( Maybe this playlist will help https://music.apple.com/in/playlist/2am/pl.u-JPAZERNuD6xbPxm … disclaimer: they're a whole different genre )
  All the best ! Study hard & Ace It ! 
  
  Waiting for you 
  With all the love I can give 
  Adi  `);

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
