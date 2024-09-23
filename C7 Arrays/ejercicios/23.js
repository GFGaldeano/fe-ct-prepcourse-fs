function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
 var resultados = [];

  for (var i = 0; i < 10; i++) {
      num = num + 2; // Aumenta num en 2
      resultados.push(num); // Guarda el nuevo valor en el arreglo

      // Verifica si la suma y la cantidad de iteraciones coinciden
      if (num === i + 1) {
          return "Se interrumpió la ejecución"; // Retorna el mensaje de interrupción
      }
  }

  return resultados; // Retorna el arreglo con los resultados
}
module.exports = breakStatement;
