function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0; // Retorna 0 si no se pasan argumentos
  }

  let producto = 1;

  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i]; // Multiplica cada argumento
  }

  return producto; // Retorna el producto
}

module.exports = multiplicarArgumentos;
