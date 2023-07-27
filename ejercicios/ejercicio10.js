/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

let fila = parseInt( prompt("Ingrese un numero para las filas"));
let columna= parseInt( prompt("Ingrese un numero para las columnas"));
let multiplicacion= fila * columna;

for (let i =0; i < fila; i++) {
    let fila= "";
    for(let j = 0; j < columna; j++) {
        fila += `[${multiplicacion}]`;
        multiplicacion--;
    }
    console.log(fila);
}

