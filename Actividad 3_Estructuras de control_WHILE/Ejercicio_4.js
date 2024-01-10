/* Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. 
Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, 
mostrar en pantalla la concatenación de todas las palabras capturadas. */

let answer;
let LetraPalabra=[]

while (answer !== '') {
    answer = prompt("Ingresa letras o palabras (no ingreses nada para terminar)");
    LetraPalabra.push(answer);
}

console.log("Lista de letras o palabras capturadas:");
console.log(LetraPalabra);