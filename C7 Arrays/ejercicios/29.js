function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null; // Retorna null si el arreglo está vacío
  }

  // Ordena el arreglo para asegurar que los números estén en secuencia
  numeros.sort((a, b) => a - b);

  for (var i = 0; i < numeros.length - 1; i++) {
    // Verifica si hay un salto en la secuencia
    if (numeros[i] + 1 !== numeros[i + 1]) {
      return numeros[i] + 1; // Retorna el número faltante
    }
  }

  return null; // Retorna null si no hay números faltantes
}

module.exports = encontrarNumeroFaltante;
