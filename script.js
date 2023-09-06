function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Reset error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    let isValid = true;

    // Username validation (minimum 5 characters)
    if (username.length < 5) {
        document.getElementById("usernameError").textContent = "Username must be at least 5 characters.";
        isValid = false;
    }

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email address.";
        isValid = false;
    }

    // Password validation (minimum 8 characters)
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
