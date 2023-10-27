const numero = parseInt(prompt("Ingresa un número:"));
let resultado = "";
if (numero % 2 === 0) {
  resultado += " es divisible por 2";
}
if (numero % 3 === 0) {
  resultado += resultado ? ", 3" : " es divisible por 3";
}
if (numero % 5 === 0) {
  resultado += resultado ? ", 5" : " es divisible por 5";
}
if (numero % 7 === 0) {
  resultado += resultado ? ", 7" : " es divisible por 7";
}
if (resultado) {
  document.write(numero + resultado);
} else {
  document.write(numero + " no es divisible por 2, 3, 5 ni 7");
}
