function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (!Array.isArray(array) || array.length === 0) {
    return false; // Retorna false si no es un arreglo o está vacío
}

var primerElemento = array[0]; // Toma el primer elemento

for (let i = 1; i < array.length; i++) {
    if (array[i] !== primerElemento) {
        return false; // Retorna false si encuentra un elemento diferente
    }
}

return true; // Retorna true si todos los elementos son iguales
}


module.exports = todosIguales;
