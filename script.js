
const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("togglePassword");

const strengthText = document.getElementById("strengthText");
const strengthBar = document.getElementById("strengthBar");
const strengthPercentage = document.getElementById("strengthPercentage");
const securityMessage = document.getElementById("securityMessage");

const requirements = {
    length: document.getElementById("length"),
    uppercase: document.getElementById("uppercase"),
    lowercase: document.getElementById("lowercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special")
};

// Passwort anzeigen oder verbergen
toggleButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Verbergen";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Anzeigen";
    }
});

// Passwort analysieren
passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };

    let score = 0;

    for (const key in checks) {
        if (checks[key]) {
            score++;
            requirements[key].textContent =
                "✓ " + requirements[key].textContent.substring(2);
            requirements[key].classList.add("valid");
        } else {
            requirements[key].textContent =
                "○ " + requirements[key].textContent.substring(2);
            requirements[key].classList.remove("valid");
        }
    }

    const percentage = score * 20;

    strengthBar.style.width = percentage + "%";
    strengthPercentage.textContent = percentage + "%";

    if (password.length === 0) {
        strengthText.textContent = "Nicht geprüft";
        securityMessage.textContent =
            "Geben Sie ein Passwort ein, um die Analyse zu starten.";
        strengthBar.style.background = "#253346";
        return;
    }

    if (score <= 2) {
        strengthText.textContent = "Schwach";
        strengthBar.style.background = "#ff4d4d";
        securityMessage.textContent =
            "Ihr Passwort ist schwach. Verbessern Sie die Sicherheitsanforderungen.";
    } else if (score <= 4) {
        strengthText.textContent = "Mittel";
        strengthBar.style.background = "#ffb020";
        securityMessage.textContent =
            "Ihr Passwort ist mittelstark. Es gibt noch Verbesserungspotenzial.";
    } else {
        strengthText.textContent = "Stark";
        strengthBar.style.background = "#00f5a0";
        securityMessage.textContent =
            "Sehr gut! Ihr Passwort erfüllt alle Sicherheitsanforderungen.";
    }
});

