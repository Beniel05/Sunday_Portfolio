// === Theme Toggle ===
document.querySelector('.toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// === Smooth Scrolling (already handled by CSS scroll-behavior) ===
// Optional: Scroll to top on reload
window.scrollTo(0, 0);

// === Typewriter Effect (no cursor jump) ===
const text = "Welcome to My Portfolio ✨";
const element = document.querySelector(".typewriter");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    element.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
    index++;
    setTimeout(typeWriter, 100);
  } else {
    element.innerHTML = text; // remove cursor when done
  }
}

// Start typing after DOM load
window.addEventListener("DOMContentLoaded", () => {
  element.innerHTML = "";
  typeWriter();
});