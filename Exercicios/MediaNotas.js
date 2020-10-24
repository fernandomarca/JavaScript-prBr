import alunos from './alunos.js';

function situacao(media) {
  let situacao = "reprovado";
  if (media >= 70) {
    situacao = "aprovado";
  }
  return situacao;
}

function media(aluno) {
  let media = 0;
  let soma = 0;
  let alunoMedia = [];

  soma = aluno.notas.reduce(function (acc, nota) {
    return acc + nota;
  }, 0);

  media = soma / aluno.notas.length;
  //aluno.media = media;
  alunoMedia.push({
    ...aluno,
    "media": media,
    "situacao": situacao(media),
  });

  return alunoMedia;
}

const pesquisaAluno = (input) => {
  const aluno = alunos.find(aluno => aluno.nome === input);

  if (aluno) {
    const alunoEncontrado = media(aluno);
    return alunoEncontrado;
  }

  return null;
}

const aluno = pesquisaAluno("Marcos");
console.log(aluno);