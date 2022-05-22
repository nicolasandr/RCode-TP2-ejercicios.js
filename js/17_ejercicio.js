/*
17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado
*/
let texto= prompt(`ingrese un texto`);
let tamanio= texto.length;
let i=0;
while(i < tamanio){
 
 if (texto.charAt(i)=='a' || texto.charAt(i)=='e'|| texto.charAt(i)=='i' || texto.charAt(i)=='o' || texto.charAt(i)=='u')
 {
    document.write(`El texto: "${texto}" tiene la primera vocal en la posicion: ${i+1}`);
    i=tamanio;
 }
 i++;
}  
