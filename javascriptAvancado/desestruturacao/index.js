const os = require('os');

const plataform = {
  linux: "seu sistema é linux",
  darwin: "seu sistema é Ios",
  win32: "windows"
}

const meuSistema = os.platform();

console.log(plataform[meuSistema])