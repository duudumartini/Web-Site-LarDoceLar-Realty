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
    // Obtém o valor da data de nascimento do input
    let dataNascimento = document.getElementById("input_nascimento_cadastrar_funcionario").value;

    // Verifica se foi fornecida uma data
    if (dataNascimento === "") {
        alert("Por favor, forneça uma data de nascimento.");
        return false;
    }

    // Cria um objeto Date com a data fornecida
    let data = new Date(dataNascimento);

    // Verifica se a data é válida
    if (isNaN(data.getTime())) {
        alert("Por favor, insira uma data de nascimento válida.");
        return false;
    }

    // Verifica se a data de nascimento é no futuro (ou seja, ainda não nasceu)
    let hoje = new Date();
    if (data > hoje) {
        alert("A data de nascimento não pode estar no futuro.");
        return false;
    }

    // Se chegou até aqui, a data é válida
    return true;
}

function validarCEP(cep){
    let input_cep = document.getElementById("input_cep_cadastrar_funcionario")
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
    })
    .catch(error => {
        // Captura e trata erros de requisição
        alert("CEP não localizado!");
        input_endereco.value = '';
        input_cidade.value = '';
        inputCep.style.backgroundColor = '#ff9c9c'
    });
}

function alteraBackground(){

}

// Função para chamar a validação ao perder o foco do campo de data de nascimento
document.getElementById("input_nascimento_cadastrar_funcionario").addEventListener("blur", function() {
    validarDataNascimento();
});

document.getElementById("input_cep_cadastrar_funcionario").addEventListener("blur", function() {
    validarCEP(this.value);
});

selectGereno();