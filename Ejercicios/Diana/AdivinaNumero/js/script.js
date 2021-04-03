var randomNumber = Math.floor(Math.random() * 100) + 1;
const adivinanzas = document.querySelector('.adivinanzas');
const ultimoResultado = document.querySelector('.ultimoResultado');
const bajoOAlto = document.querySelector('.bajoOAlto');
const adivinaSubmit = document.querySelector('.adivinaSubmit');
const campoAdivina = document.querySelector('.campoAdivina');
const form = document.querySelector('.form');
//
const resultParas = document.querySelector('.resultParas');
const div = document.querySelector('.p2');
//
var contadorAdivinanzas = 1;
var resetButton;

adivinaSubmit.addEventListener('click', checaAdivinanza);

function checaAdivinanza() {
    var AdivinanzaUsuario = Number(campoAdivina.value);
    if (contadorAdivinanzas ==1) {
        adivinanzas.textContent = 'Adivinanzas Previas: ';
    }

    adivinanzas.textContent += AdivinanzaUsuario + ' ';

    if (AdivinanzaUsuario == randomNumber) {
        ultimoResultado.textContent = 'Felicidades! Estás en lo correcto!';
        div.style.backgroundColor = 'green';
        bajoOAlto.textContent = '';
        form.style.display = 'none';
        empezarJuego();
    } else if (contadorAdivinanzas == 10) {
        ultimoResultado.textContent = '!!!GAME OVER!!!';
        bajoOAlto.textContent = '';
        form.style.display = 'none';
        empezarJuego();
    } else {
        ultimoResultado.textContent = 'Error!';
        div.style.backgroundColor = 'red';
        if(AdivinanzaUsuario < randomNumber) {
            bajoOAlto.textContent = 'El último número es demasiado bajo!' ;
        } else if(AdivinanzaUsuario > randomNumber) {
            bajoOAlto.textContent = 'El último número es demasiado alto!';
        }
    }

    //muestra elementos
    resultParas.style.display = 'block';
    form.style.display = 'inline-block';

    contadorAdivinanzas++;
    campoAdivina.value = '';
    campoAdivina.focus();
}

function empezarJuego() {
    campoAdivina.disabled = true;
    adivinaSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.id='reset';
    resetButton.textContent = 'Iniciar nuevo Juego';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetJuego);
}

function resetJuego() {
    //oculta elementos
    resultParas.style.display = 'none';
    form.style.display = 'block';
    //
    contadorAdivinanzas = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    campoAdivina.disabled = false;
    adivinaSubmit.disabled = false;
    campoAdivina.value = '';
    campoAdivina.focus();
    randomNumber = Math.floor(Math.random() * 100) + 1;
}