// Smooth scroll
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

// Typing animation
const text = "Hi, I'm a Web Developer";
const typing = document.getElementById("typing-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 80);
  }
}
typeText();

// Scroll animation
const elements = document.querySelectorAll(".animate");
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("show"), i * 150);
    }
  });
});
elements.forEach(el => observer.observe(el));
