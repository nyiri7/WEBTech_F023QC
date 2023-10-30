document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    const felh = document.getElementById('felhn').value;
    const pwd = document.getElementById('pwd').value;
    const pwda = document.getElementById('pwda').value;

    const prevError = document.getElementById('error-message');
    if (prevError) {
        prevError.remove();
    }

    if (/[A-Z]/.test(pwd) && pwd.length >= 8 && pwd === pwda) {
        const logindata = {
            username: felh,
            pwd: pwd
        };
        localStorage.setItem('logindata', JSON.stringify(logindata));
        window.location.href = 'login.html';
    } else {
        const errorMessage = document.createElement('div');
        errorMessage.id = 'error-message';
        errorMessage.className = "error"
        
        if (!/[A-Z]/.test(pwd)) {
            errorMessage.textContent = 'A jelszónak tartalmaznia kell legalább egy nagy betűt!';
        } else if (pwd.length < 8) {
            errorMessage.textContent = 'A jelszónak legalább 8 karakter hosszúnak kell lennie!';
        } else {
            errorMessage.textContent = 'A jelszavak nem egyeznek!';
        }
        document.body.appendChild(errorMessage);
    }
});