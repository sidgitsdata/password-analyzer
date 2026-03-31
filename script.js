const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const suggestions = document.getElementById("suggestions");

passwordInput.addEventListener("input", analyzePassword);

function analyzePassword() {
    const password = passwordInput.value;
    let score = 0;
    let feedback = [];

    if (password.length >= 8) score++;
    else feedback.push("Use at least 8 characters");

    if (/[A-Z]/.test(password)) score++;
    else feedback.push("Add uppercase letters");

    if (/[a-z]/.test(password)) score++;
    else feedback.push("Add lowercase letters");

    if (/[0-9]/.test(password)) score++;
    else feedback.push("Include numbers");

    if (/[^A-Za-z0-9]/.test(password)) score++;
    else feedback.push("Use special characters");

    updateUI(score, feedback);
}

function updateUI(score, feedback) {
    let strength = "";
    let color = "";

    switch(score) {
        case 0:
        case 1:
            strength = "Very Weak";
            color = "red";
            strengthBar.style.width = "20%";
            break;
        case 2:
            strength = "Weak";
            color = "orange";
            strengthBar.style.width = "40%";
            break;
        case 3:
            strength = "Medium";
            color = "yellow";
            strengthBar.style.width = "60%";
            break;
        case 4:
            strength = "Strong";
            color = "lightgreen";
            strengthBar.style.width = "80%";
            break;
        case 5:
            strength = "Very Strong";
            color = "green";
            strengthBar.style.width = "100%";
            break;
    }

    strengthBar.style.background = color;
    strengthText.innerText = "Strength: " + strength;

    suggestions.innerHTML = "";
    feedback.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        suggestions.appendChild(li);
    });
}

function togglePassword() {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
}
