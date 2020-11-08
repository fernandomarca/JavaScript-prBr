function media(aluno) {
  var notas = aluno.notas;
  var media = 0;
  var soma = 0;
  for (nota of notas) {
    soma = soma + nota;
    media = soma / notas.length;
  }

  if (aluno.matricula) {
    return {
      "media": media,
      "matricula": aluno.matricula
    }
  } else {
    return {
      "Erro": "Aluno não encontrado"
    }
  }

}

const aluno1 = {
  "notas": [50, 60],
  "matricula": 123
}

resultado = media(aluno1);

console.log(resultado)
