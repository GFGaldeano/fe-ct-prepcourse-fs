function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
    if (Array.isArray(array)) {
        const indice = array.indexOf(num); // Busca el índice del número
        return indice !== -1 ? indice : -1; // Retorna el índice o -1 si no se encuentra
    }
    return -1; // Retorna -1 si no es un arreglo
}

module.exports = encontrarElemento;
