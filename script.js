document.addEventListener("DOMContentLoaded", () => {
    const headingText =
      "Aspiring Web Developer | HTML Email Specialist | Tech Enthusiast"; // Added line break here
    const headingElement = document.getElementById("typewriter-heading");
    let currentIndex = 0;
  
    function typeWriter() {
      if (currentIndex < headingText.length) {
        headingElement.textContent += headingText.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds per character)
      }
    }
  
    typeWriter();
  });
  