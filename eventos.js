function mouseOver(element) {
    //console.log(element);
    element.style.backgroundColor = "red";
}

function mouseOut(element) {
    //console.log(element);
    element.style.backgroundColor = "rgb(0, 81, 255)";
}

function handleText(element) {
    //console.log('aqui');
    let p = document.getElementsByTagName('p')[0];
    //let input = document.getElementById('input');
    //console.log(p);
    p.innerHTML = element.value;
}

function mudarText() {
    let p = document.getElementsByTagName('p')[0];
    p.innerHTML = "novo texto com func.mudartext";
}

(function loaded() {
    //funcao imediata
    let btn = document.getElementById('btn');
    btn.onclick = mudarText;

    let p = document.getElementsByTagName('p')[0];
    p.onclick = mudarText;
}());