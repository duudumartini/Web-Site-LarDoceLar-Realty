var imagens = [
    "Fotos Empreendimentos/prédio 1/3.jpg",
    "Fotos Empreendimentos/prédio 1/2.jpg",
    "Fotos Empreendimentos/prédio 1/1.jpg"
  ];
  
  var indexAtual = 0;
  var imagem_destaque1 = document.getElementById("imagem_destaque1");
  
  function trocaImagemBanner1() {
    imagem_destaque1.style.opacity = 1;
    setTimeout(function() {
        imagem_destaque1.src = imagens[indexAtual];
        imagem_destaque1.style.opacity = 0;
        indexAtual = (indexAtual + 1) % imagens.length;
    },1000);
}

setInterval(trocaImagemBanner1, 1000);
