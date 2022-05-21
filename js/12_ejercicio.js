/*12- Realiza un script que genere un número aleatorio entre 1 y 99*/
/*
/*
ayuda:
Math.round(Math.random()*(b-a)+parseInt(a));

math.random(): Devuelve un numero aleatorio.
math.round(): Elimina los decimales.
(b-a): Rango.
*/
let numRandom=Math.round(Math.random()*(99-1)+parseInt(1));
document.write(`${numRandom}`);
