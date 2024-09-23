function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
 var contador = 0;

  for (var numero of numeros) {
      if (numero % 2 !== 0) {
          continue; // Omite los números impares
      }
      contador++; // Incrementa el contador si es par
  }

  return contador; // Retorna la cantidad de números pares
}


module.exports = contarParesConContinue;
