var lastScrollTop = 0;
var isAnimating = false;
var isExpanded = false;

window.addEventListener('scroll', function() {
  var header = document.getElementsByClassName('myHeader')[0];
  var contatos = document.getElementById("contatos");
  var atualScrollTop = window.scrollY;
  
  if (!isAnimating && !isExpanded) {
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
        setTimeout(function() {
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

var header = document.getElementsByClassName('myHeader')[0];

header.addEventListener('mouseenter', function() {
  if (!isAnimating) {
    isExpanded = true;
    header.style.width = "480px";
    var contatos = document.getElementById("contatos");
    contatos.style.display = "flex";
    setTimeout(function() {
      contatos.style.opacity = 1;
    }, 50);
  }
});

header.addEventListener('mouseleave', function() {
  if (!isAnimating) {
    isExpanded = false;
    header.style.width = "50px";
    var contatos = document.getElementById("contatos");
    contatos.style.opacity = 0;
    contatos.style.display = "none";
  }
});
