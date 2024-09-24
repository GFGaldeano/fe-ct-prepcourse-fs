function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retornar nada.
  // Tu código:
  var suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
  // Pasa el resultado al callback recibido.
  cb(suma);
}

module.exports = sumarArray;
