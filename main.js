

function som(idSom) {

    const elemento = document.querySelector(idSom);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('ELEMENTO NÃO ENCONTRADO.')
    }
}

const listadeteclas = document.querySelectorAll('.tecla');
 
for (let contador = 0; contador < listadeteclas.length; contador++) {

    const tecla = listadeteclas[contador];
    const tipodesom = tecla.classList[1];
    const idaudio = `#som_${tipodesom}`;//template string

    tecla.onclick = function () {
        som(idaudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Sapace' || evento.code === 'Enter') {
           tecla.classList.add('ativa');
        }
    
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

} 
