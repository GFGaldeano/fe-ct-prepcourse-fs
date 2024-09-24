function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevoArreglo = arrayOfStrings.filter((str) => str.startsWith('a'));
   // Retorna el nuevo arreglo.
   return nuevoArreglo;
}

module.exports = filter;
