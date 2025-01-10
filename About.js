document.addEventListener("DOMContentLoaded", () => {
    // Highlight active nav link
    const navLinks = document.querySelectorAll(".nav-links ul li a");
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  
    // Tab functionality for About sections
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".tab-content");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active-tab"));
        sections.forEach(section => section.classList.remove("active-content"));
  
        tab.classList.add("active-tab");
        document.querySelector(`#${tab.dataset.target}`).classList.add("active-content");
      });
    });
  });
  