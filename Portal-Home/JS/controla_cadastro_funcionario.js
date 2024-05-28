function selectGereno(){
    document.getElementById('select_genero').addEventListener('change', function () {
        let outroGeneroDiv = document.getElementById('outro_genero_cadastrar_funcionario');
        if (this.value === 'não_informado') {
            outroGeneroDiv.style.display = 'flex';
        } else {
            outroGeneroDiv.style.display = 'none';
        }
    });
}

function validarDataNascimento() {
    // Obtém o elemento do input de data de nascimento
    let input_dataNascimento = document.getElementById("input_nascimento_cadastrar_funcionario");

    // Obtém o valor da data de nascimento do input
    let dataNascimento = input_dataNascimento.value;

    // Verifica se foi fornecida uma data
    if (dataNascimento === "") {
        input_dataNascimento.style.backgroundColor = '#ff9c9c';
        return false;
    }

    // Cria um objeto Date com a data fornecida
    let data = new Date(dataNascimento);

    // Verifica se a data é válida
    if (isNaN(data.getTime())) {
        input_dataNascimento.style.backgroundColor = '#ff9c9c';
        return false;
    }

    // Verifica se a data de nascimento é no futuro (ou seja, ainda não nasceu)
    let hoje = new Date();

    if (data > hoje) {
        input_dataNascimento.style.backgroundColor = '#ff9c9c';
        return false;
    }

    // Se chegou até aqui, a data é válida
    input_dataNascimento.style.backgroundColor = '#0cffae';
    return true;
}


function validarCEP(cep) {
    let input_cep = document.getElementById("input_cep_cadastrar_funcionario");
    let input_endereco = document.getElementById("input_endereco_cadastrar_funcionario");
    let input_cidade = document.getElementById("input_cidade_cadastrar_funcionario");
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('CEP não localizado');
        }
        return response.json();
    })
    .then(data => {
        // Verifica se o CEP retornou um erro
        if (data.erro) {
            throw new Error('CEP não localizado');
        }
        // Manipula os dados retornados pela API
        console.log(data);
        let endereco = `${data.logradouro} - ${data.bairro}`;
        let cidade = `${data.localidade} / ${data.uf}`;
        input_endereco.value = endereco;
        input_cidade.value = cidade;
        input_cep.style.backgroundColor = '#0cffae';
        input_endereco.style.backgroundColor = '#0cffae';
        input_cidade.style.backgroundColor = '#0cffae';

    })
    .catch(error => {
        input_endereco.value = '';
        input_cidade.value = '';
        input_cep.style.backgroundColor = '#ff9c9c'; // Corrigido para input_cep
    });
}

function CPFValido(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais (CPFs inválidos como 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Validação do dígito verificador
    var sum = 0;
    var remainder;

    for (var i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if ((remainder == 10) || (remainder == 11)) {
        remainder = 0;
    }

    if (remainder != parseInt(cpf.substring(9, 10))) {
        return false;
    }

    sum = 0;
    for (i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if ((remainder == 10) || (remainder == 11)) {
        remainder = 0;
    }

    if (remainder != parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function alteraBackground() {
    // Função auxiliar para adicionar o event listener de blur
    function addBlurEventListener(inputId) {
        document.getElementById(inputId).addEventListener("blur", function() {
            if (this.value == "" || (Number(this.value) < 0)) {
                this.style.backgroundColor = '#ff9c9c';
            } else {
                this.style.backgroundColor = '#0cffae';
            }
        });
    }
    // Adiciona o event listener para cada campo de entrada
    addBlurEventListener("select_cargo");
    addBlurEventListener("input_nome_cadastrar_funcionario");
    addBlurEventListener("input_sobrenome_cadastrar_funcionario");
    addBlurEventListener("select_genero");
    addBlurEventListener("outro_genero");
    addBlurEventListener("input_num_endereco_cadastro_funcionario");
    addBlurEventListener("input_endereco_cadastro_funcionario");
    addBlurEventListener("input_cidade_cadastrar_funcionario");
}

function validarEmail(){
    let emailInput = document.getElementById('input_email_cadastrar_funcionario');
    let email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valido = emailPattern.test(email);

    if(valido){
        emailInput.style.backgroundColor = '#0cffae';
    }
    else{
        emailInput.style.backgroundColor = '#ff9c9c';
    }
}

function validarCelular() {
    let celularInput = document.getElementById('input_celular_cadastrar_funcionario');
    let celular = celularInput.value;
    // Padrão para validar o número de celular
    const valido = celular.length >= 11

    if (valido) {
        celularInput.style.backgroundColor = '#0cffae'; // Verde para válido
    } else {
        celularInput.style.backgroundColor = '#ff9c9c'; // Vermelho para inválido
    }
}

function validarUsuario() {
    let usuarioInput = document.getElementById('input_usuario_cadastrar_funcionario');
    let usuario = usuarioInput.value;
    // Verifica se o comprimento do ID do usuário é pelo menos 5 caracteres
    const valido = usuario.length >= 5;

    if (valido) {
        usuarioInput.style.backgroundColor = '#0cffae'; // Verde para válido
    } else {
        usuarioInput.style.backgroundColor = '#ff9c9c'; // Vermelho para inválido
    }
}

function validarSenha() {
    let senhaInput = document.getElementById('input_senha_cadastrar_funcionario');
    let confirmarSenhaInput = document.getElementById('input_confirmar_senha_cadastrar_usuario');
    let senha = senhaInput.value;
    let confirmarSenha = confirmarSenhaInput.value;
    // Verifica se a senha tem pelo menos 5 caracteres
    const senhaValida = senha.length >= 5;
    const confirmarSenhaValida = confirmarSenha.length >= 5;

    if (senhaValida && senha !== '') {
        senhaInput.style.backgroundColor = '#0cffae'; // Verde para válida
    } else {
        senhaInput.style.backgroundColor = '#ff9c9c'; // Vermelho para inválida
    }

    if (confirmarSenhaValida && confirmarSenha !== '') {
        confirmarSenhaInput.style.backgroundColor = '#0cffae'; // Verde para válida
    } else {
        confirmarSenhaInput.style.backgroundColor = '#ff9c9c'; // Vermelho para inválida
    }

    if (senha !== '' && confirmarSenha !== '' && confirmarSenha !== senha) {
        confirmarSenhaInput.style.backgroundColor = '#ff9c9c';
        senhaInput.style.backgroundColor = '#ff9c9c';
        alert("As senhas não conferem!");
    }
}

function trocaFoto() {
    let imagemFuncionario = document.getElementById('adicionar_foto_funcionario');
    let inputArquivo = document.createElement('input');
    inputArquivo.type = 'file';

    inputArquivo.addEventListener('change', function() {
        // Verifica se um arquivo foi selecionado
        if (inputArquivo.files && inputArquivo.files[0]) {
            let reader = new FileReader();
            
            reader.onload = function(e) {
                let img = new Image();
                img.onload = function() {
                    let canvas = document.createElement('canvas');
                    let ctx = canvas.getContext('2d');
                    let largura = 200; // Tamanho desejado da imagem
                    let altura = 200; // Tamanho desejado da imagem

                    // Verifica qual é o menor tamanho (largura ou altura)
                    let minSize = Math.min(img.width, img.height);
                    
                    // Calcula o tamanho e o ponto de partida para o corte
                    let startX = (img.width - minSize) / 2;
                    let startY = (img.height - minSize) / 2;
                    canvas.width = largura;
                    canvas.height = altura;
                    
                    // Desenha a imagem cortada e redimensionada no canvas
                    ctx.drawImage(img, startX, startY, minSize, minSize, 0, 0, largura, altura);
                    
                    // Define a imagem da foto do funcionário como a imagem do canvas (cortada e redimensionada)
                    imagemFuncionario.src = canvas.toDataURL('image/jpeg');
                };
                img.src = e.target.result;
            };
            
            reader.readAsDataURL(inputArquivo.files[0]);
        }
    });
    
    // Simula um clique no input de arquivo
    inputArquivo.click();
}

document.getElementById("adicionar_foto_funcionario").addEventListener("click", function() {
    trocaFoto();
});


document.getElementById("input_senha_cadastrar_funcionario").addEventListener("blur", function() {
    validarSenha();
});

document.getElementById("input_confirmar_senha_cadastrar_usuario").addEventListener("blur", function() {
    validarSenha();
});

document.getElementById("input_usuario_cadastrar_funcionario").addEventListener("blur", function() {
    validarUsuario();
});

document.getElementById("input_email_cadastrar_funcionario").addEventListener("blur", function() {
    validarEmail();
});

document.getElementById("input_celular_cadastrar_funcionario").addEventListener("blur", function() {
    validarCelular();
});

document.getElementById("input_nascimento_cadastrar_funcionario").addEventListener("blur", function() {
    validarDataNascimento();
});

document.getElementById("input_cpf_cadastro_funcionario").addEventListener("blur", function() {
    var cpf = this.value;
    if (!CPFValido(cpf)) {
        this.style.backgroundColor = '#ff9c9c';
    }                
    else{
        this.style.backgroundColor = '#0cffae';
    }
});

document.getElementById("input_cep_cadastrar_funcionario").addEventListener("blur", function() {
    validarCEP(this.value);
});

selectGereno();
alteraBackground();