/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”
*/
let letras= prompt(`ingrese un texto`);
let tamanio= letras.length;
let i=0;
while(i < tamanio){
 
  document.write(`${letras.charAt(i)}`)
  if(i<tamanio-1)
  document.write(`-`);
 i++;
}  