const button = document.getElementById("profile_pic");
const elementToToggle = document.getElementById("myName");

button.addEventListener("click",function() {
    if (elementToToggle.style.display ==="none") {
        elementToToggle.style.display = 'block';
    }
    else {
        elementToToggle.style.display = "none";
    }
});
const phrases = ["Web developer", "also learning Data analytics"];
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
