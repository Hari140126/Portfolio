// ----------------------------
// CONTACT FORM SUBMISSION
// ----------------------------
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const formMessage = document.getElementById("formMessage");
      formMessage.textContent = "Thanks for reaching out! I’ll get back to you soon.";
      contactForm.reset();
    });
  }
});
