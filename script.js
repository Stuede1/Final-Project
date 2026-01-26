// Mobile Menu Functionality

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".mobile-menu-btn");
  const closeButton = document.querySelector(".mobile-menu-close");
  const modalLinks = document.querySelector(".modal__links");
  const menuOverlay = document.createElement("div");
  menuOverlay.className = "menu-overlay";
  document.body.appendChild(menuOverlay);

  function openMenu() {
    modalLinks.classList.add("menu--open");
    menuOverlay.classList.add("menu--open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    modalLinks.classList.remove("menu--open");
    menuOverlay.classList.remove("menu--open");
    document.body.style.overflow = "";
  }

  // Toggle menu when clicking the hamburger button
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (modalLinks.classList.contains("menu--open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking outside
  menuOverlay.addEventListener("click", closeMenu);

  // Close menu when clicking on a nav link
  document.querySelectorAll(".modal__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  // Close menu when clicking the close button
  closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenu();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".testimonial-track");
  const slides = Array.from(document.querySelectorAll(".testimonial-slide"));
  const dots = Array.from(document.querySelectorAll(".dot"));
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  let currentSlide = 0;
  const slideCount = slides.length;

  // Set initial state
  updateCarousel();

  // Event listeners for navigation
  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  });

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (index !== currentSlide) {
        currentSlide = index;
        updateCarousel();
      }
    });
  });

  // Auto-advance carousel (optional)
  let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  }, 8000);

  // Pause auto-advance on hover
  const carousel = document.querySelector(".testimonial-carousel");
  carousel.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  carousel.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slideCount;
      updateCarousel();
    }, 8000);
  });

  // Update carousel state
  function updateCarousel() {
    // Update slides
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "prev", "next");

      if (index === currentSlide) {
        slide.classList.add("active");
      } else if (index === (currentSlide - 1 + slideCount) % slideCount) {
        slide.classList.add("prev");
      } else if (index === (currentSlide + 1) % slideCount) {
        slide.classList.add("next");
      }
    });

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  // Handle keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateCarousel();
    } else if (e.key === "ArrowRight") {
      currentSlide = (currentSlide + 1) % slideCount;
      updateCarousel();
    }
  });
});
