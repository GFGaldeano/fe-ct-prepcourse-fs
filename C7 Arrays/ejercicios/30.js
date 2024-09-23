function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
var seen = new Set(); // Crea un conjunto para rastrear los números ya vistos

  for (var numero of numeros) {
      if (seen.has(numero)) {
          return numero; // Retorna el primer número que ya ha sido visto
      }
      seen.add(numero); // Agrega el número al conjunto
  }

  return undefined; // Retorna null si no se encuentra ningún repetido
}

module.exports = encontrarElementoRepetido;