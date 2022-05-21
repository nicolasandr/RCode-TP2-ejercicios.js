/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. **/

let nombre1 = prompt("ingresar un primer nombre:");
let edad1 =parseInt (prompt("ingresar su edad:"));

let nombre2 = prompt("ingresar un segundo nombre:");
let edad2 =parseInt( prompt("ingresar su edad:"));

let nombre3 = prompt("ingresar un tercer nombre:");
let edad3 =parseInt( prompt("ingresar su edad:"));

let mayor=Math.max(edad1,edad2,edad3);

if(edad1 == mayor){
    document.write(`${nombre1} es mayor<br>`);
}
if(edad2 == mayor){
    document.write(`${nombre2} es mayor<br>`);
}
if(edad3 == mayor){
    document.write(`${nombre3} es mayor<br>`);
}