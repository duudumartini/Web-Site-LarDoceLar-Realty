var lastScrollTop = 0;
var isAnimating = false;

window.addEventListener('scroll', function() {
  var header = document.getElementsByClassName('myHeader')[0]; // Acessando o primeiro elemento da lista
  var contatos = document.getElementById("contatos");
  var atualScrollTop = window.scrollY;
  
  if (!isAnimating) {
    if (atualScrollTop > lastScrollTop) {
      // Scroll para baixo
      isAnimating = true;
      header.style.width = "50px";
      contatos.style.opacity = 0;
      contatos.style.display = "none";
      setTimeout(function() {
        isAnimating = false;
      }, 800);
    } else {
      // Scroll para cima
      isAnimating = true;
      header.style.width = "480px";
      setTimeout(function() {
        contatos.style.display = "flex";
        setInterval(function() {
          contatos.style.opacity = 1;
        }, 50);
        setTimeout(function() {
          isAnimating = false;
        }, 800);
      }, 800); // Tempo de atraso em milissegundos (ajuste conforme necessário)
    }
  }
  
  lastScrollTop = atualScrollTop <= 0 ? 0 : atualScrollTop; // Para garantir que lastScrollTop não seja negativo
});
