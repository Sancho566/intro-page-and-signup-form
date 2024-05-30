// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
  
      const firstName = document.getElementById('first-name').value.trim();
      const lastName = document.getElementById('last-name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Simple validation
      if (firstName === '' || lastName === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
      } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
      } else {
        alert('Form submitted successfully!');
        // Here you can add further form handling logic such as sending data to a server
        form.reset(); // Reset the form fields
      }
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  