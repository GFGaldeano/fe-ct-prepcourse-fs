function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = a;

    for (let i = a; i <= b; i++) {
      producto *= i; // Multiplica el número actual al producto total
  }

  return producto; // Devuelve el producto total
}

module.exports = productoEntreNúmeros;
