/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
let letras= prompt(`ingrese un texto`);
let tamanio= letras.length;
let i=0;
let numBocales=0;

while(i < tamanio){
 
 if (letras.charAt(i)=='a' || letras.charAt(i)=='e'|| letras.charAt(i)=='i' || letras.charAt(i)=='o' || letras.charAt(i)=='u')
 {
     numBocales ++;
 }
 i++;
}  
document.write(`El texto: "${letras}" tiene ${numBocales} vocales.`)