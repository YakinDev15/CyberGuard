
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CyberGuard – Passwort-Sicherheitsprüfung</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container">

        <header>
            <div class="logo">🔐 CYBER<span>GUARD</span></div>
            <p class="subtitle">PASSWORT-SICHERHEITSPRÜFUNG</p>
        </header>

        <main class="security-card">

            <div class="shield">🛡️</div>

            <h1>Passwort-Analyse</h1>
            <p class="description">
                Überprüfen Sie die Sicherheit Ihres Passworts.
            </p>

            <label for="password">Passwort eingeben</label>

            <div class="password-box">
                <input
                    type="password"
                    id="password"
                    placeholder="Geben Sie Ihr Passwort ein..."
                    autocomplete="off"
                >

                <button type="button" id="togglePassword">
                    Anzeigen
                </button>
            </div>

            <div class="strength-section">
                <div class="strength-header">
                    <span>Passwortstärke</span>
                    <span id="strengthText">Nicht geprüft</span>
                </div>

                <div class="progress-bar">
                    <div id="strengthBar"></div>
                </div>

                <p id="strengthPercentage">0%</p>
            </div>

            <div class="requirements">
                <h3>Sicherheitsanforderungen</h3>

                <p id="length">○ Mindestens 8 Zeichen</p>
                <p id="uppercase">○ Mindestens ein Großbuchstabe (A-Z)</p>
                <p id="lowercase">○ Mindestens ein Kleinbuchstabe (a-z)</p>
                <p id="number">○ Mindestens eine Zahl (0-9)</p>
                <p id="special">○ Mindestens ein Sonderzeichen (!@#$%)</p>
            </div>

            <div id="securityMessage">
                Geben Sie ein Passwort ein, um die Analyse zu starten.
            </div>

        </main>

        <footer>
            <p>CYBERGUARD © 2026 | Passwort-Sicherheitstool</p>
        </footer>

    </div>

    <script src="script.js" defer></script>

</body>
</html>


     
