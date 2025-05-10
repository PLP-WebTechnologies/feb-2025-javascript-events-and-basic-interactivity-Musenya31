// Changing text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("textDisplay").textContent = "You clicked the button!";
});

// Hover effect handling
document.getElementById("hoverBtn").addEventListener("mouseover", function() {
    document.getElementById("hoverText").textContent = "Hover detected!";
});
document.getElementById("hoverBtn").addEventListener("mouseout", function() {
    document.getElementById("hoverText").textContent = "This text will change when you hover over the button.";
});

// Form validation: Email format check
document.getElementById("emailInput").addEventListener("input", function() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    document.getElementById("emailFeedback").textContent = 
        emailPattern.test(this.value) ? "✅ Valid email!" : "❌ Invalid email!";
});

// Form validation: Password length check
document.getElementById("passwordInput").addEventListener("input", function() {
    document.getElementById("passwordFeedback").textContent = 
        this.value.length >= 8 ? "✅ Strong password!" : "❌ Password must be at least 8 characters.";
});

// Slideshow functionality
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

document.getElementById("nextImageBtn").addEventListener("click", function() {
    index = (index + 1) % images.length;
    document.getElementById("slideshow").src = images[index];
});

