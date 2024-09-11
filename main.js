const form = document.querySelector('#form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizaMediaFinal();
    // alert(`Atividade: ${inputNomeAtv.value} - Nota: ${inputNotaAtv.value}`);
    // Transferiu comandos daqui para as funções 'adicionarLinha()' e 'atualizarTabela()'
});

function adicionarLinha() {
    const inputNomeAtv = document.querySelector('#nome-atividade');
    const inputNotaAtv = document.querySelector('#nota-atividade');

    if (atividades.includes(inputNomeAtv.value)) {
        alert(`A atividade "${inputNomeAtv.value}" já foi adicionada`);
    } else {
        atividades.push(inputNomeAtv.value);
        notas.push(parseFloat(inputNotaAtv.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtv.value}</td>`;
        linha += `<td>${inputNotaAtv.value}</td>`;
        linha += `<td>${inputNotaAtv.value >= (notaMinima || 6) ? imgAprovado : imgReprovado }</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeAtv.value = '';
        inputNotaAtv.value = '';
    }
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.querySelector('#media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= (notaMinima || 6) ? spanAprovado : spanReprovado;

    // console.log(atividades)
    // console.log(notas)
    // console.log(somaDasNotas)
    // const media = somaDasNotas / notas.length;
    console.log(media)
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    return somaDasNotas / notas.length;
}


