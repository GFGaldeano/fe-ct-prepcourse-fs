function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var max = array[0];
  var maxIndice = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndice = i;
    }
  }
  return maxIndice;
}

module.exports = encontrarIndiceMayor;
