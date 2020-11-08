var aluno = {
  nome: "Fernando",
  notas: [9, 8],

  media: calcMedia,
}

function calcMedia() {
  return (this.notas[0] + this.notas[1]) / 2;
}
//console.log(aluno);
console.log(aluno.media());
aluno["notas"] = [10, 10];
console.log(aluno.media());
