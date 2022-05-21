/*10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
let filas = parseInt(prompt("ingrese numero de filas"));
let columnas = parseInt(prompt("ingrese numero de columnas"));
let producto= (filas*columnas);
for (let numero = 1; numero <= filas ; numero++) {
    
    for (let repetir = 1; repetir <= columnas; repetir++) {
      document.write(`${producto--}`);
    }
    document.write(`<br>`);
  }