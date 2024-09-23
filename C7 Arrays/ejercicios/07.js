function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if (Array.isArray(array)) {
    return array.slice().sort((a, b) => {
        // Convertir ambos elementos a string para compararlos
        var valorA = String(a);
        var valorB = String(b);

        // Comparar los elementos
        return valorA.localeCompare(valorB);
    });
}
return []; // Retorna un arreglo vacío si no es un arreglo
}

module.exports = ordenarArray;
