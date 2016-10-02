var a = document.getElementById("area");
var trazo = a.getContext ("2d");
var x =150, y =150;
var movimiento = 10;
var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  trazo.beginPath ();
  trazo.strokeStyle = color;
  trazo.moveTo (xinicial,yinicial);
  trazo.lineTo (xfinal,yfinal);
  trazo.stroke ();
  trazo.closePath ();
}
console.log (teclas);
document.addEventListener("keyup",dibujarTeclado);

function dibujarTeclado(evento)
{
    switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea ("red", x, y, x, y - movimiento)
      y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea ("red", x, y, x, y + movimiento)
    y = y + movimiento;
    break;
    case teclas.LEFT:
    dibujarLinea ("red", x, y, x - movimiento, y)
    x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea ("red", x, y, x + movimiento, y)
    x = x + movimiento;
    break;
  }
}
