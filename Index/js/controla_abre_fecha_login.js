document.getElementById('icone_login').addEventListener('click', function() {
    var blocoLogin = document.getElementById('section_login');
    var corpo = document.getElementById("corpo");
    corpo.style.overflowY = 'hidden';
    blocoLogin.style.display = 'flex';
    blocoLogin.style.top = window.scrollY + 'px'; // Posiciona o bloco de login de acordo com a posição da rolagem
});

document.getElementById('btn_fechar').addEventListener('click', function() {
    var blocoLogin = document.getElementById('section_login');
    var corpo = document.getElementById("corpo");
    corpo.style.overflowY = 'auto';
    blocoLogin.style.display = 'none';
    blocoLogin.style.top = window.scrollY + 'px'; // Posiciona o bloco de login de acordo com a posição da rolagem
});