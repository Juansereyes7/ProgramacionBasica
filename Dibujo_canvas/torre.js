alert ("comando prueba a ver si funciona");
var d = document.getElementById("torre");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener ("click",dibujoPorClick);
var lienzo = d.getContext("2d");
var i =0;
function dibujoPorClick ()
{
  console.log(texto);
  var t = parseInt(texto.value);
  alert("No me toque ahi " + t);
  while (i<=t)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = "red";
    lienzo.moveTo (i,0);
    i = i + 10;
    lienzo.lineTo (300,i);
    lienzo.stroke();
    lienzo.closePath();
  }
}
