const form = document.getElementById('form-registro')

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionar()
}) 

function adicionar () {
    const nomeConst = document.getElementById ('nomeTel')
    const tellConst = document.getElementById ('Telefon')
    const relacaoConst = document.getElementById ('relacao')

    let linha = '<tr>';
    linha += `<td>${nomeConst.value}</td>`;
    linha += `<td>${tellConst.value}</td>`;
    linha += `<td>${relacaoConst.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody')

    corpoTabela.innerHTML = linhas;
}