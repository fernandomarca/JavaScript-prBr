let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("data-num"));
//lista.dataset.num //também pega o atributo
//lista.dataset.num="10" //também pega o atributo

let conteudo = "";

for (let i = 1; i <= num; i++) {
  conteudo += `<li>${i}</li>`;
}
lista.innerHTML = conteudo;