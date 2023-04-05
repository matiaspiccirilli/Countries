function palindrome(str) {
    // Convertimos la cadena en minúsculas y eliminamos los caracteres especiales
 str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

 // Verificamos si la cadena es igual a su reverso
 return str === str.split('').reverse().join('');
}

palindrome("eye");
