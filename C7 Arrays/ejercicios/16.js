function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var resultado = [];
  for (var i = 0; i < array.length; i++) {
    resultado.push( i * array[i] );
  }
  return resultado;
}

module.exports = multiplicarElementosPorIndice;
