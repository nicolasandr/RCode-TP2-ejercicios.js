/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
let cadena= prompt(`Ingrese una cadena de texto`);
let tamanio= cadena.length;
let i=tamanio;
while (i >= 0) {
    document.write(`${cadena.charAt(i)}`);
    i--;
}