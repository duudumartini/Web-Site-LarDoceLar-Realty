const blocos = document.querySelectorAll('.bloco_unico_resultado_pesquisar_imovel');

// Adiciona um ouvinte de eventos de clique a cada bloco
blocos.forEach(bloco => {
    bloco.addEventListener('click', () => {
        // Seleciona o elemento com o ID 'bloco_pesquisar_buscar_imovel'
        const tituloPesquisar = document.getElementById('titulo_pesquisar_imovel');
        const blocoPesquisar = document.getElementById('bloco_pesquisar_buscar_imovel');
        const blocoResultadoPesquisa = document.getElementById('bloco_area_resultado_pesquisar_movel');

        // Altera o estilo display para 'none'
        tituloPesquisar.style.display = 'none';
        blocoPesquisar.style.display = 'none';
        blocoResultadoPesquisa.style.display = 'none';
    });
});