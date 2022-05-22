/*5- Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/
let palabra='TRWAGMYFPDXBNJZSQVHLCKE'
do{
    let num = parseInt(prompt("ingrese un numero de 0 a 99999999"));
      if(Number.isNaN(num) == true){
          alert(`el valor ingresado no es un numero`);
      }
      else
      {
          if(num>0 && num<=99999999)
      {
          for(let i=0; i < 20; i++)
          {
            if((num%23) == i){
            document.write(`al numero ${num} le corresponde la letra ${palabra.charAt(i)} que esta en la posicion ${(num%23)+1}<br>`);
            }
          }
       }
       else{
           alert(`ingrese un numero dentro del rango`);
       }
    }
  }while(confirm(`desea introducir otro numero?`) == true);