// Simple scroll animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.content').forEach(section => {
    const pos = section.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const cookieBox = document.getElementById("cookieConsent");
  const acceptBtn = document.getElementById("acceptCookieBtn");

  if (!cookieBox || !acceptBtn) return;

  // Already accepted
  if (localStorage.getItem("cookiesAccepted") === "yes") {
    cookieBox.style.display = "none";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "yes");
    cookieBox.style.display = "none";
  });
});