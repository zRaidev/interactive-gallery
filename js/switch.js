// Obtener el elemento del interruptor
const toggleSwitch = document.getElementById('toggleSwitch');
const switchBtn = document.querySelector('.switch-css');
const switchFunc = document.querySelector('.switch-function');

// Variable para almacenar el estado del interruptor
let encendido = false;

// Función para cambiar el estado del interruptor
function cambiarEstado() {
  encendido = !encendido;
  if (encendido) {
    //noche
    switchBtn.innerHTML = `
    .moon-span {
      animation: opacityIn .1s forwards;
    }
    .sun-span {
      animation: opacityOut .1s forwards;
    }
    `
    switchFunc.innerHTML = `
    :root {
      --color-one: #333;
      --color-two: #2f2f2f;
      --txt-color: #fff;
    }
  `
  } else {
   //dia
    switchBtn.innerHTML = `
    .sun-span {
      animation: opacityIn .1s forwards;
    }
    .moon-span {
      animation: opacityOut .1s forwards;
    }
    `
    switchFunc.innerHTML = `
      :root {
        --color-one: #fff; /*#333*/
        --color-two: #e6e6e6; /*#2f2f2f*/
        --txt-color: #000;
      }
    `
  }
}

// Agregar un evento de cambio al interruptor
toggleSwitch.addEventListener('change', cambiarEstado);