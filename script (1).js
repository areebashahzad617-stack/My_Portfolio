document.addEventListener('DOMContentLoaded', function () {
  console.log("Portfolio loaded successfully!");

  // 1. Dark/Light Theme Switcher Logic
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    
    // Switch emoji icon based on mode
    if (document.body.classList.contains('light-mode')) {
      themeToggleBtn.textContent = '🌙';
    } else {
      themeToggleBtn.textContent = '☀️';
    }
  });

  // 2. Interactive Contact Form Submission Feedback
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual reload
    
    const nameInput = document.getElementById('name').value;
    
    // Show success feedback animation text
    formStatus.textContent = `Thank you, ${nameInput}! Your message has been sent successfully.`;
    
    // Clear the form fields
    contactForm.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      formStatus.textContent = '';
    }, 5000);
  });
});
