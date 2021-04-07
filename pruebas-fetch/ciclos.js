for(var i= 0;i <5;i++){
console.log("i",i)
}


var cajas=document.querySelectorAll(".cajas");


for(var i=0;i<cajas.length;i++){
    cajas[i].style.width ="50px";
    cajas[i].style.height="50px";
    cajas[i].style.background="blue";
    cajas[i].style.marginTop="5px";

}