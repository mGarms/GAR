// script.js
document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple client-side validation (replace with server-side in real app)
    if (username === 'test' && password === 'password') {
        errorMessage.textContent = ''; // Clear any previous error
        alert('Login successful!');
        // window.location.href = "dashboard.html"; // Redirect on success
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});