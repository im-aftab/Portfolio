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