const imagens = ["imagem_casanova1", "imagem_casanova2", "imagem_casanova3", "imagem_casanova4", "imagem_casanova5", "imagem_casanova6"];
let currentImageIndex1 = 0;
let currentImageIndex2 = 1; // Começamos com 1 para garantir que as imagens sejam diferentes

function altera_fotos1() {
    // Oculta a imagem atual do primeiro conjunto
    const imagemAtual1 = document.getElementById(imagens[currentImageIndex1]);
    imagemAtual1.style.opacity = 0;

    // Atualiza o índice para a próxima imagem da primeira série
    currentImageIndex1 = (currentImageIndex1 + 1) % imagens.length;

    // Certifica-se de que os índices sejam diferentes
    if (currentImageIndex1 === currentImageIndex2) {
        currentImageIndex1 = (currentImageIndex1 + 1) % imagens.length;
    }

    // Mostra a nova imagem do primeiro conjunto
    const novaImagem1 = document.getElementById(imagens[currentImageIndex1]);
    novaImagem1.style.opacity = 1;
}

function altera_fotos2() {
    // Oculta a imagem atual do segundo conjunto
    const imagemAtual2 = document.getElementById(imagens[currentImageIndex2]);
    imagemAtual2.style.opacity = 0;

    // Atualiza o índice para a próxima imagem da segunda série
    currentImageIndex2 = (currentImageIndex2 + 1) % imagens.length;

    // Certifica-se de que os índices sejam diferentes
    if (currentImageIndex1 === currentImageIndex2) {
        currentImageIndex2 = (currentImageIndex2 + 1) % imagens.length;
    }

    // Mostra a nova imagem do segundo conjunto
    const novaImagem2 = document.getElementById(imagens[currentImageIndex2]);
    novaImagem2.style.opacity = 1;
}

// Define intervalos separados para alternar as fotos
setInterval(altera_fotos1, 3500);
setInterval(altera_fotos2, 4000);

// Inicializa as primeiras imagens visíveis
document.getElementById(imagens[currentImageIndex1]).style.opacity = 1;
document.getElementById(imagens[currentImageIndex2]).style.opacity = 1;

