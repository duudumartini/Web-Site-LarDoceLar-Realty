var imagens_destaque1 = [
    "Fotos Empreendimentos/prédio 1/3.jpg",
    "Fotos Empreendimentos/prédio 1/2.jpg",
    "Fotos Empreendimentos/prédio 1/1.jpg"
  ];
  
var imagens_destaque2 = [
    "Fotos Empreendimentos/casa 1/3.jpg",
    "Fotos Empreendimentos/casa 1/2.jpg",
    "Fotos Empreendimentos/casa 1/1.jpg"
  ];

var imagens_destaque3 = [
    "Fotos Empreendimentos/casa 2/3.jpg",
    "Fotos Empreendimentos/casa 2/2.jpg",
    "Fotos Empreendimentos/casa 2/1.jpg"
  ];
  
  var indexAtualDestaque1 = 0;
  var imagem_destaque1 = document.getElementById("imagem_destaque1");

  var indexAtualDestaque2 = 0;
  var imagem_destaque2 = document.getElementById("imagem_destaque2");

  var indexAtualDestaque3 = 0;
  var imagem_destaque3 = document.getElementById("imagem_destaque3");
  
  function trocaImagemBanner1() {
    imagem_destaque1.style.opacity = 0;
    setTimeout(function() {
        imagem_destaque1.src = imagens_destaque1[indexAtualDestaque1];
        imagem_destaque1.style.opacity = 1;
        indexAtualDestaque1 = (indexAtualDestaque1 + 1) % imagens_destaque1.length;
    },300);
}

function trocaImagemBanner2() {
  imagem_destaque2.style.opacity = 0;
  setTimeout(function() {
      imagem_destaque2.src = imagens_destaque2[indexAtualDestaque2];
      imagem_destaque2.style.opacity = 1;
      indexAtualDestaque2 = (indexAtualDestaque2 + 1) % imagens_destaque2.length;
  },300);
}

function trocaImagemBanner3() {
  imagem_destaque3.style.opacity = 0;
  setTimeout(function() {
      imagem_destaque3.src = imagens_destaque3[indexAtualDestaque3];
      imagem_destaque3.style.opacity = 1;
      indexAtualDestaque3 = (indexAtualDestaque3 + 1) % imagens_destaque3.length;
  },300);
}

setInterval(trocaImagemBanner1, 2000);
setInterval(trocaImagemBanner2, 2000);
setInterval(trocaImagemBanner3, 2000);