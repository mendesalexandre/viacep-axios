const form = document.querySelector('#form');
const inputCep = document.querySelector('.s');
const resultado = document.querySelector('#resultado');

function buscarCep() {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `https://viacep.com.br/ws/${cep}/json/`;

            axios.request(URL)
                .then(resposta => mostrarResposta(resposta.data))
                .catch(erro => console.error(erro));
        }
    });
}

function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep},
        Logradouro: ${cep.logradouro},
        Complemento: ${cep.complemento},
        Bairro: ${cep.bairro},
        Cidade ${cep.localidade},
        Estado: ${cep.uf}
    `;
    resultado.innerHTML = mensagem;
}
buscarCep()