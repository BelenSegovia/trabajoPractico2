/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
 */

let acumulador= '';
while (true){
    let texto= prompt("Coloque un texto:");
    if (texto === null) {
        break;
    }
    acumulador= acumulador + " - " + texto
    console.log(acumulador);
}
