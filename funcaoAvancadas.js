
var saudacoes = {
  "saudacao1": function () {
    return "Olá Desconhecido";
  },
  "saudacao2": (nome) => {
    return `Olá ${nome}`;
  },
};

//console.log(saudacoes.saudacao2("Fernando"));

function media(n1, n2) {
  return (n1 + n2) / 2;
}

var media = function (n1, n2) {
  return (n1 + n2) / 2;
}

console.log(media(50, 50));
var m = media(60, 70);
console.log(m);

console.log(typeof (media))