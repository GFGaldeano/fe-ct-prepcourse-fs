function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if (letra.length === 1){
    if (letra.toLowerCase() == "a" || letra.toLowerCase() == "e" || letra.toLowerCase() == "i" || letra.toLowerCase() == "o" || letra.toLowerCase() == "u"){
      return "Es vocal";
    }
        return "Dato incorrecto";
      }
        
      
      return "Dato incorrecto";
    }



module.exports = esVocal;
