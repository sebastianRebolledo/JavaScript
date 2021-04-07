var recuadro= document.querySelector("#recuadro");

function cambiarColor(){
    recuadro.style.background="red";
}

//ejecutar eventos desde javascript
//primero se alamcena al boton al que se le va a dar click

var boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja);

function moverCaja(){
    recuadro.style.width="500px";
}