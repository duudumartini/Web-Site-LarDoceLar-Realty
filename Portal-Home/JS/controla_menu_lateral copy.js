const setaLateral = document.getElementById('seta_menu_lateral');
const menu = document.getElementById('section_menu_lateral');

menu.addEventListener('click', () => {
    if (menu.style.left === '0px' || menu.style.left === '') {
        menu.style.left = '-180px';
        menu.style.cursor = 'pointer';
        setaLateral.style.transform = 'rotate(180deg)';
        setaLateral.style.scale = '1';
    } else {
        menu.style.left = '0px';
        menu.style.cursor = 'default';
        setaLateral.style.transform = 'rotate(0deg)';
        setaLateral.style.scale = '0.6';
    }
});


function adicionarEventosBotoes() {
    // Seleciona todos os elementos com a classe 'botao_lateral'
    const botoes = document.querySelectorAll('.botao_lateral');

    // Itera sobre cada botão
    botoes.forEach(botao => {
        // Adiciona evento de 'mouseover' para cada botão
        botao.addEventListener('mouseover', function() {
            this.style.transform = 'translateX(15px)';
        });

        // Adiciona evento de 'mouseout' para cada botão
        botao.addEventListener('mouseout', function() {
            this.style.transform = 'translateX(0px)';
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var botoesLateral = document.querySelectorAll(".botao_lateral");
    var sectionsMenuLateral = document.querySelectorAll(".sections_menu_lateral");

    botoesLateral.forEach(function(botao) {
        botao.addEventListener("click", function() {
            var botaoId = this.id.replace("botao_", "");
            var sectionId = "section_" + botaoId;

            sectionsMenuLateral.forEach(function(section) {
                if (section.id === sectionId) {
                    section.style.display = "flex";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });
});



// Espera o DOM carregar para adicionar os eventos aos botões
document.addEventListener('DOMContentLoaded', adicionarEventosBotoes);
