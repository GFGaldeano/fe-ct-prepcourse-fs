function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero <= 0) {
    return false; // Las potencias de 2 son números positivos
}

while (numero > 1) {
    if (numero % 2 !== 0) {
        return false; // Si no es divisible entre 2, no es potencia de 2
    }
    numero /= 2; // Dividimos el número entre 2
}

return true; // Si llegamos aquí, es una potencia de 2
}




module.exports = esPotenciaDeDos;
