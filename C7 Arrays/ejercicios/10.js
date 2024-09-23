function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] !== null &&
      array[i] !== undefined &&
       array[i].length >= 5) {
      return array[i];
    }
    break;  
    } 
        return undefined;
    }
  

module.exports = obtenerPrimerStringLargo;
