let numero1 = parseInt(prompt("Escriba el primer numero"));
let numero2 = parseInt(prompt("Escriba el segundo numero"));
let numero3 = parseInt(prompt("Escriba el tercer numero"));

if (numero1 > numero2) {
  if (numero1 > numero3) {
    document.write("El mayor numero es " + numero1);
  } else {
    document.write("El mayor numero es " + numero3);
  }
} else if (numero2 > numero3) {
  document.write("El mayor numero es " + numero2);
} else {
  document.write("El mayor numero es " + numero3);
}
