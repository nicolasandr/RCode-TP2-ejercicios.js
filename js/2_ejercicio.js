/*2- Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
 Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
 */
console.log(NaN);
let nota = parseInt(prompt("ingrese una nota de 0 a 10"));
if (Number.isNaN(nota) == false) {  //number.isNAN(nota) me devuelve true cuando el valor ingresado es una letra.
  if (nota >= 0 && nota <= 2) {
    alert("Muy deficiente");
  }
  if (nota >= 3 && nota <= 4) {
    alert("Insuficiente");
  }
  if (nota >= 5 && nota <= 6) {
    alert("Suficiente");
  }
  if (nota == 7) {
    alert("Bien");
  }
  if (nota >= 8 && nota <= 9) {
    alert("Notable");
  }
  if (nota == 7) {
    alert("Sobresaliente");
  }
  if (nota <= 0 || nota > 10) {
    document.write("numero erroneo");
  }
} else alert("introduce un nuemero valido");

