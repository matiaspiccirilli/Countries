function rot13(str) {
  // Crea una variable para almacenar el resultado
  let result = "";
  // Recorre cada letra de la cadena de entrada
  for (let i = 0; i < str.length; i++) {
    // Obtiene el código ASCII de la letra actual
    let ascii = str.charCodeAt(i);
    // Verifica si la letra es una letra mayúscula
    if (ascii >= 65 && ascii <= 90) {
      // Aplica el cifrado ROT13
      ascii = ascii + 13;
      if (ascii > 90) {
        ascii = ascii - 26;
      }
    }
    // Convierte el código ASCII cifrado en una letra y agrega al resultado
    result += String.fromCharCode(ascii);
  }
  // Devuelve la cadena descifrada
  return result;
}

