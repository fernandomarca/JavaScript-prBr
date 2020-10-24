
var alunos = ["Fernando", "João", "Rhayza", "Marcos", "Maicon"];

for (index in alunos) {
  console.log(index);
}

for (aluno of alunos) {
  console.log(aluno);
}

console.log(alunos.includes("Marcos", 1));