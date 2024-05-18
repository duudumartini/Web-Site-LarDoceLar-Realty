const blocosIds = ['bloco_praivabrava', 'bloco_camboriu', 'bloco_itapema', 'bloco_itajai'];
var mouse = false;

function alteraEscalaCinza() {
    if (mouse === false){ // Correção aqui: use '===' em vez de '=' para comparação
        const indiceAleatorio = Math.floor(Math.random() * blocosIds.length);
        const elemento = document.getElementById(blocosIds[indiceAleatorio]);
        elemento.style.filter = 'grayscale(0%)';
        setTimeout(() => {
            elemento.style.filter = 'grayscale(70%)';
        }, 1500);
    }
}
setInterval(alteraEscalaCinza, 2000);

for (let i = 0; i < blocosIds.length; i++){
    const elemento = document.getElementById(blocosIds[i]);
    elemento.addEventListener("mouseenter", () => {
        elemento.style.filter = 'grayscale(0%)';
        mouse = true;
    });
    elemento.addEventListener("mouseleave", () => {
        mouse = false;
        elemento.style.filter = "grayscale(70%)";
        alteraEscalaCinza(); 
    });
}
alteraEscalaCinza();

