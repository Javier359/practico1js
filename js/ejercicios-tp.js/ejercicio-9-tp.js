const frase = prompt("Ingresa una frase:");
for (let i = 0; i < frase.length; i++) {
  const caracter = frase.charAt(i);
  if ("AEIOUaeiou".includes(caracter)) {
    document.write(caracter);
  }
}

