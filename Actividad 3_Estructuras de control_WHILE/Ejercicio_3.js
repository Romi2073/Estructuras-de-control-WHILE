/*Crea un programa que solicite al usuario números, 
si lo que este introduce es un número guardarlo en un arreglo. 
Para terminar el capturar el usuario debe ingresar el número 0. 
Finalmente mostrar la lista de números capturados en pantalla o en la consola*/

let números;
let número=[]

while (números !== 0) {
    números = Number(prompt("Ingresa un número (Ingresa 0 para terminar):"));
    número.push(números);
}

console.log("Lista de números capturados:");
console.log(número);



