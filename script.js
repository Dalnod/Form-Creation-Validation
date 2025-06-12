document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form')
    const feedbackDiv = document.getElementById('form-feedback')

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = userNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;
        let messages = [];

        //Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username is too short');
        }

        //Email Validation
        if (!email.include('@')) {
            isValid = false;
            messages.push('incorrect email address')
        }

        //Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password entered is too short')
        }

        const feedbackDiv = document.getElementById('form-feedback').value;

        if (isValid) {
            feedbackDiv.style.display = 'block';
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        }

       
    })
});