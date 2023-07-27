/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */ 

let acumulador= 0;
while (true){
    let numero= prompt("Coloque un número:");
    if (numero === null) {
        break;
    }
    numero = Number(numero);
    if (isNaN(numero)) {
        alert("Ingrese un caracter válido");
        continue;
    }
    acumulador= numero
    console.log(acumulador);
}