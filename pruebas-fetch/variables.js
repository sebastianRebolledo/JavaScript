//variables numericas
var numero_decimal = 5;
console.log("numero",numero_decimal);

var palabra= "palabras";
console.log("palabra",palabra);

var boleana= true;
console.log("booleana",boleana);

//variables de tipo arreglo
var arrayColores = ["rojo","amarillo", true, 5,palabra];
console.log("colores",arrayColores[0]);


//variables de type object (object: property, value property)
var jugo = {ingrediente1: "fresa",
ingregientes2:"mandarina",
ingrediente3:"banano"
}
console.log("juego",jugo);
console.log("jugo", jugo.ingrediente1);

// DOM Document Object Mode; Poder tener seleccion de algun elemento que tenga en el documento
//variables DOM: EL DOM es la estructrua de objectos que genera el navegador cuandos e carga un documento
//y se puede alterar medianteJavascript para cambiar dinamciamente los contenidos y aspecto de la pagina 

var caja = document.querySelector("div");
var caja2 = document.querySelector("#caja");

var cajas= document.querySelectorAll(".cajas");
console.log("cajas",cajas);

console.log("caja",caja);