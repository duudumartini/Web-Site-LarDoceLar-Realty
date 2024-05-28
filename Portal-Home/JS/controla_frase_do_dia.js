let urlFrase = `https://api.adviceslip.com/advice`;

fetch(urlFrase)
  .then(response => response.json())
  .then(data => {
    let frase = document.getElementById("frase_do_dia");
    let textoOriginal = data.slip.advice;
    let urlTraducao = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" + encodeURI(textoOriginal);
    
    fetch(urlTraducao)
      .then(response => response.json())
      .then(data => {
        // Extrai o texto traduzido da resposta
        let textoTraduzido = data[0][0][0];
        frase.innerHTML = `"${textoTraduzido}"`;
      })
      .catch(error => console.error('Erro ao traduzir:', error));
  })
  .catch(error => console.log('Ocorreu um erro:', error));
