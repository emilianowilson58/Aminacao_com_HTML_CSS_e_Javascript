const ligado = document.getElementById('btn_on');
const desligado = document.getElementById('btn_off');
const lamp_ligado = document.getElementById('on')
const lamp_desligado = document.getElementById('off');


function checked() {
  if (ligado.style.display == 'block') {
    ligado.style.display = 'none';
    lamp_ligado.style.display = 'none';
    lamp_desligado.style.display = 'block';
    desligado.style.display = 'block';
  } else {
    ligado.style.display = 'block';
    lamp_ligado.style.display = 'block';
    lamp_desligado.style.display = 'none';
    desligado.style.display = 'none';
  }
}

ligado.addEventListener('click', checked);
desligado.addEventListener('click', checked);