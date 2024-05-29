
function validarCEP(cep) {
    let input_cep = document.getElementById("input_cep_cadastrar_imovel");
    let input_endereco = document.getElementById("input_endereco_cadastrar_imovel");
    let input_cidade = document.getElementById("input_cidade_cadastrar_imovel");
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

function validarCelular() {
    let celularInput = document.getElementById('input_telefone_cadastrar_imovel');
    let celular = celularInput.value;
    // Padrão para validar o número de celular
    const valido = celular.length >= 11

    if (valido) {
        celularInput.style.backgroundColor = '#0cffae'; // Verde para válido
    } else {
        celularInput.style.backgroundColor = '#ff9c9c'; // Vermelho para inválido
    }
}

function validarEmail(){
    let emailInput = document.getElementById('input_email_cadastrar_imovel');
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
    addBlurEventListener("input_titulo_imovel_cadastrar_imovel");
    addBlurEventListener("input_preco_cadastrar_imovel");
    addBlurEventListener("input_descricao_cadastrar_imovel");
    addBlurEventListener("input_numero_cadastrar_imovel");
    addBlurEventListener("input_area_cadastrar_imovel");
    addBlurEventListener("input_num_endereco_cadastro_funcionario");
    addBlurEventListener("input_quartos_cadastrar_imovel");
    addBlurEventListener("input_banheiros_cadastrar_imovel");
    addBlurEventListener("input_vagas_cadastrar_imovel");
    addBlurEventListener("input_nome_proprietario_cadastrar_imovel");
    addBlurEventListener("input_sobrenome_propritario_cadastrar_imovel");
}

function selectTipo(){
    document.getElementById('input_tipo_cadastrar_imovel').addEventListener('change', function () {
        let tipoImovel = document.getElementById('input_tipo_cadastrar_imovel');
        if (this.value === "") {
            tipoImovel.style.backgroundColor = '#ff9c9c';
        } else {
            tipoImovel.style.backgroundColor = '#0cffae';
        }
    });
}


document.getElementById("input_cep_cadastrar_imovel").addEventListener("blur", function() {
    validarCEP(this.value);
});

document.getElementById("input_cpf_cadastrar_imovel").addEventListener("blur", function() {
    var cpf = this.value;
    if (!CPFValido(cpf)) {
        this.style.backgroundColor = '#ff9c9c';
    }                
    else{
        this.style.backgroundColor = '#0cffae';
    }
});

document.getElementById("input_telefone_cadastrar_imovel").addEventListener("blur", function() {
    validarCelular();
});

document.getElementById("input_email_cadastrar_imovel").addEventListener("blur", function() {
    validarEmail();
});

selectTipo();
alteraBackground();