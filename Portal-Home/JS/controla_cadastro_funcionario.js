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
}


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