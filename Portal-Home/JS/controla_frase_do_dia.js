let urlFrase = `https://api.adviceslip.com/advice`;

fetch(urlFrase)
  .then(response => response.json())
  .then(data =>{
    let frase = document.getElementById("frase_do_dia");
    frase.innerHTML = `"${data.slip.advice}"`;
})
.catch(error => console.log('Ocorreu um erro:', error));
