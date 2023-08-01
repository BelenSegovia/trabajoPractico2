/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

let texto= prompt("Coloque un texto aquí: ");

const textoInformacion = (texto) => {
    let textoMayusculas = texto.toUpperCase()
    if (texto === textoMayusculas){
        console.log("El texto contiene mayúsculas")    
    } else if (texto === texto.toLowerCase()){
        console.log("El texto está en minúscula");
    } else {
        console.log("El texto es una mezcla de ambos");
    }
} 
textoInformacion(texto);