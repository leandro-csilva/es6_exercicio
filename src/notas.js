const alunos = ['Jason', 'Gabriel', 'Wesley'];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        nota: 5
    }
})

alunos2.push({
    nome: 'Alice',
    nota: 7
})

function filtraNotasAzuis(aluno){
    return aluno.nota >= 6
}

const notasAzuis = alunos2.filter(filtraNotasAzuis)

console.log(notasAzuis)