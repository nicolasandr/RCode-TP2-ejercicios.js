/*3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
 */

while(confirm(`desea ingresar una cadena?`)==true){
    let cadena=prompt(`ingrese cadena`);
    if(cadena!= null){    
        document.write(`${cadena}-`);
    }
    if(cadena==null){
        document.write(``);
    }
}
