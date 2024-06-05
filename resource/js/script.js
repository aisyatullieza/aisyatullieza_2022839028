
// Lightbox

document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".item img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".img-container img");
    const lightboxTitle = document.querySelector(".img-container p");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const body = document.querySelector("body");

    let currentIndex;

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", function () {
            currentIndex = index;
            updateLightbox();
            lightbox.style.display = "flex";
            body.classList.add("prevent-background-scroll");
        });
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            body.classList.remove("prevent-background-scroll");
        }
    });

    prevBtn.addEventListener("click", function () {
        currentIndex =
            (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightbox();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightbox();
    });

    function updateLightbox() {
        const currentImage = galleryImages[currentIndex];
        lightboxImage.src = currentImage.src;
        lightboxTitle.textContent = currentImage.alt;
    }
});

