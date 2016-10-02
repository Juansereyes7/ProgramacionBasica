var x = parseInt (prompt ("ingresa el minimo"));
var y = parseInt(prompt ("ingresa el máximo"));
var z = aleatorio (x, y);

function aleatorio (min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

document.write (parseInt(z));
