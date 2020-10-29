let video = document.getElementById("video1");
let controle = document.getElementsByClassName('controle');
var zoom = document.getElementsByClassName('zoom');

function retroceder() {
  video.currentTime -= 15;
}

function avancar() {
  video.currentTime += 15;
}
function diminuir_vel() {
  video.playbackRate -= 0.1;
}
function aumentar_vel() {
  video.playbackRate += 0.1;
}
function play() {
  video.play();
}
function stop() {
  video.pause();
  video.currentTime = 0;
}

controle[0].addEventListener('mouseout', () => {
  controle[0].style.opacity = 0;
});

controle[0].addEventListener('mouseover', () => {
  controle[0].style.opacity = 1;
  controle[0].style.transition = 'opacity 0.5s';
});

for (const btn of zoom) {
  btn.addEventListener('mouseover', () => {
    btn.style.fontSize = '50px';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.fontSize = '40px';
  });
}