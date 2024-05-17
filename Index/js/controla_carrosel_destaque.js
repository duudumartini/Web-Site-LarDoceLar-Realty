const lista = document.querySelector('.slider_destaques');
const elementos = lista.querySelectorAll('li');
const arrayDeElementos = Array.from(elementos);
let currentIndex = 0;

function mostrarElemento(index) {
    arrayDeElementos.forEach((li, i) => {
        setTimeout(function () {
            li.style.opacity = i === index ? 1 : 0;
            setTimeout(function () {
                arrayDeElementos.forEach((element, j) => {
                    if (j === index) {
                        element.style.display = "block";
                    } else {
                        element.style.display = "none";
                    }
                });
            }, 600); // Definindo um atraso de 1000ms (1 segundo) para ajustar o display após a opacidade
        }, 1000 * i); // Atraso é multiplicado por 'i' para que cada elemento seja exibido com um atraso de 2 segundos
    });
}


function avancar() {
    currentIndex = (currentIndex === arrayDeElementos.length - 1) ? 0 : currentIndex + 1;
    mostrarElemento(currentIndex);
}

// Mostrar o primeiro elemento ao carregar a página
mostrarElemento(currentIndex);

// Avançar automaticamente a cada 6 segundos
setInterval(avancar, 6000);
