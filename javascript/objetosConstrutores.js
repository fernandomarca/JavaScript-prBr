const turma = [];

function criarAluno(nome, n1, n2) {
  const aluno = {
    nome,
    nota1: n1,
    nota2: n2,
    calcMedia: function () {
      return (this.nota1 + this.nota2) / 2;
    },
  }

  turma.push({
    nome: aluno.nome,
    nota1: aluno.nota1,
    nota2: aluno.nota1,
    media: aluno.calcMedia()
  });
  return aluno;
}

const aluno1 = criarAluno("Fernando", 50, 50);
const aluno2 = criarAluno("Fernando2", 100, 50);
console.log(aluno1);
//console.log(turma);

class aluno {
  constructor(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = 0;
  }
  calcMedia() {
    return this.media = (this.nota1 + this.nota2) / 2;
  }

  media() {
    this.media;
  }
}

var a = new aluno("Maria", 50, 60);
var a2 = new aluno("joanoa", 50, 60);

// console.log(a.calcMedia());
// turma.push(a);
// turma.push(a2);
// console.log(a2.calcMedia());
// console.log(turma);

// console.log(a.calcMedia())
// console.log(a.media)

function alunofunc(nome, n1, n2) {
  this.nome = nome;
  this.n1 = n1;
  this.n2 = n2;

  this.media = () => {
    return (this.n1 + this.n2) / 2;
  }
}

var alunoFunc = new alunofunc("func", 50, 60);
//console.log(alunoFunc);