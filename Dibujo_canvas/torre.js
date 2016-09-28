alert ("comando prueba a ver si funciona");
var d = document.getElementById("torre");
var lienzo = d.getContext("2d");
var i =0;


while (i<=300)
{
  lienzo.beginPath();
  lienzo.strokeStyle = "red";
  lienzo.moveTo (0,i);
  i = i + 10;
  lienzo.lineTo (i,300);
  lienzo.stroke();
  lienzo.closePath();

}
