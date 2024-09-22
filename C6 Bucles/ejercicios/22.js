function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0;

  do {
      num += 5; // Aumenta el valor de num en 5
      contador++; // Incrementa el contador
  } while (contador < 8); // Continua mientras el contador sea menor a 8

  return num; // Retorna el valor final
}


module.exports = doWhile;