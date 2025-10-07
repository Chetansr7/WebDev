document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        var content = dropdown.querySelector(".dropdown-content");

        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent the click event from bubbling up

            // Close all dropdowns except the one that was clicked
            closeAllDropdowns(content);

            // Toggle the display of the dropdown content
            content.style.display = (content.style.display === "block") ? "none" : "block";
        });
    });

    document.addEventListener("click", function () {
        closeAllDropdowns();
    });

    function closeAllDropdowns(except) {
        var dropdownContents = document.querySelectorAll(".dropdown-content");
        dropdownContents.forEach(function (content) {
            if (content !== except) {
                content.style.display = "none";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('mauritiusoutline'); // Correct selector
    var span = document.getElementsByClassName('close')[0];

    btn.onclick = function () {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    span.onclick = function () {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.getElementById('signUpBtn');
    const dropdown = document.querySelector('.dropdown1');

    signUpBtn.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && event.target !== signUpBtn) {
            dropdown.classList.remove('show');
        }
    });
});

// Register Modal
document.addEventListener('DOMContentLoaded', function () {
    var registerModal = document.getElementById('registerModal');
    var registerBtn = document.querySelector('.dropdown-content1 a[href="register.html"]');
    var closeRegister = document.querySelector('.close-register');

    registerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        registerModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeRegister.addEventListener('click', function () {
        registerModal.classList.remove('show');
        document.body.style.overflow = '';
    });

    window.addEventListener('click', function (e) {
        if (e.target === registerModal) {
            registerModal.classList.remove('show');
            document.body.style.overflow = '';

        }
    });
});

// Sign In Modal
document.addEventListener('DOMContentLoaded', function () {
    var signinModal = document.getElementById('signinModal');
    var signinBtn = document.querySelector('.dropdown-content1 a[href="signin.html"]');
    var closeSignin = document.querySelector('.close-signin');

    signinBtn.addEventListener('click', function (e) {
        e.preventDefault();
        signinModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeSignin.addEventListener('click', function () {
        signinModal.classList.remove('show');
        document.body.style.overflow = '';
    });

    window.addEventListener('click', function (e) {
        if (e.target === signinModal) {
            signinModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});

document.getElementById('registerModal').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Registration successful!');
    window.location.href = "homepage.html"; // Redirect to the homepage after clicking OK
});

document.getElementById('signinModal').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Registration successful!');
    window.location.href = "homepage.html"; // Redirect to the homepage after clicking OK
});