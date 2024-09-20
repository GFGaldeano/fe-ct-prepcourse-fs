function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:

 if (typeof valor === "string") {
    return string;
  } else if (typeof valor === "number") {
    return 'number';
  } else if (typeof valor === "boolean") {
    return boolean;
}
 
}

esTipoDato(1);
module.exports = esTipoDato;
