/*8- Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50)
1
12
123
1234
12345
123456
……
*/
let numIngresado = parseInt(prompt("ingrese un numero no mayor a 50:"));
if(numIngresado>=1 && numIngresado<=50){
for (let numero = 1; numero <= numIngresado ; numero++) {
    
    for (let repetir = 1; repetir <= numero; repetir++) {
      document.write(`${numero}`);
    }
    document.write(`<br>`);
  }
}else 
  alert('numero no valido');