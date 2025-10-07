document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Prevent the default form submission

    // Get data from user
    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // If all fields are filled, submit the form
    alert('Thank you for contacting us! We will get back to you shortly.');

    // Redirect to Main Page
    window.location.href = 'homepage.html';

});
