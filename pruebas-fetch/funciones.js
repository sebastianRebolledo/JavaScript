// funciones sin parametro
//una funcion siempre la vas a escribir en dos cuerpos
//el primer cuerpo: declaro la funcion - declaro que tarea voy a ejecutar
//segundo cuerpo: cuando ejecutamos la funcion - cuando relaizamos la tarea
//para declarar una funcion- emepzamos con la palabra reservada funcion
//se les debe dar un nombre - nombre d euna val.- no incia con numero, puntos

//cuerpo de la funcion
function saludo(){
    //tarea de al funcion
    console.log("fola funcion")
}
//para que pueda aparcer , debo ejecutar la funcion, 
saludo();

//funciones con aparametro, nso permiten enviar valores dentro de los aprentesis

function operacion(digito1,digito2){
    var resultado = digito1 + digito2;
    console.log("resultado: ", resultado);
}

operacion(5,8);


//FUNCIONES CON RETORNO SIN PARAMETRO, funciones que retornan valores

function retorno1(){
        var numero = 5;
        return numero;
}

console.log(retorno1());


//FUNCIONES CON RETORNO CON PARAMETRO

function retorno2(numero){
    return numero;
}
console.log(retorno2(20));