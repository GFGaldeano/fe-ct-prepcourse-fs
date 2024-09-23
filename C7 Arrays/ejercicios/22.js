function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tabla = [];
    
  for (let i = 0; i <= 10; i++) {
      tabla.push(6 * i); // Multiplica 6 por el índice y lo agrega al arreglo
  }
  
  return tabla; // Retorna el arreglo con la tabla del 6
}


module.exports = tablaDelSeis;
