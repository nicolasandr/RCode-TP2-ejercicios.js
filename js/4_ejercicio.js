/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma=0;
do{
  let num = parseInt(prompt("ingrese un numero"));
    if(Number.isNaN(num) == true){
        alert(`el valor ingresado no es un numero`);
    }
    else{
        suma=suma+num;
    }

}while(confirm(`desea introducir otro numero?`)==true);
document.write(`la suma es: ${suma}`);