document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const logindatac = JSON.parse(localStorage.getItem('logindata'));
    const felhc = document.getElementById('felh').value;
    const pwdc = document.getElementById('pwd').value;



    if(felhc==logindatac.username && pwdc == logindatac.pwd){
        alert('Sikeres bejelentkezes!')
        window.location.href = 'home.html';
    }else{
        alert('Sikertelen bejelentkezes!')
        document.getElementById('pwd').value = "";
    }
    
});