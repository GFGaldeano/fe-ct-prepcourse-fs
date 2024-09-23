function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
 var resultados = [];

  for (var i = 0; i < 10; i++) {
      if (i === 5) {
          continue; // Omite la suma en la quinta iteración
      }
      
      num = num + 2; // Aumenta num en 2
      resultados.push(num); // Guarda el nuevo valor en el arreglo
  }

  return resultados; // Retorna el arreglo con los resultados
}


module.exports = continueStatement;
