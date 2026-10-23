const button = document.getElementById("profile_pic");
const elementToToggle = document.getElementById("myName");

button.addEventListener("click", function () {
    if (elementToToggle.style.display === "none") {
        elementToToggle.style.display = 'block';
    }
    else {
        elementToToggle.style.display = "none";
    }
});

const phrases = ["a Web Developer", "also learning Data analytics"];
let idx = 0;
const toggleElem = document.getElementById('toggleText');

setInterval(() => {
    // Start fade out
    toggleElem.classList.add('fade');
    setTimeout(() => {
        // After fade out, change text
        idx = (idx + 1) % phrases.length;
        toggleElem.textContent = phrases[idx];
        // Fade in
        toggleElem.classList.remove('fade');
    }, 500); // Should match transition duration in CSS
}, 2000);

// Move glow
const glow = document.querySelector('.ambient-glow');
let inactivityTimer;
let active = true;

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  if (active) {
    glow.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
        rgba(99, 102, 241, 0.35) 0%,
        rgba(139, 92, 246, 0.20) 25%,
        rgba(99, 102, 241, 0.10) 50%,
        transparent 70%)
    `;
  }

  // Reset inactivity timer
  clearTimeout(inactivityTimer);
  active = true;
  inactivityTimer = setTimeout(() => {
    active = false;
    // Return glow to top center after 3s inactivity
    glow.style.background = `
      radial-gradient(circle at 50% 20%,
        rgba(99, 102, 241, 0.35) 0%,
        rgba(139, 92, 246, 0.20) 25%,
        rgba(99, 102, 241, 0.10) 50%,
        transparent 70%)
    `;
  }, 3000);
});
