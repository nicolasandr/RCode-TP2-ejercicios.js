/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
let numIngresado = parseInt(prompt("ingrese un numero del 1 al 50:"));
if (numIngresado >= 1 && numIngresado <= 50) {
  for (let numero = numIngresado ; numero >= 1 ; numero--) {

    for (let repetir = numero; repetir >= 1; repetir--) {
      document.write(`${numero}`);
    }
    document.write(`<br>`);
  } 
}
