// Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
let número1 = parseInt(prompt("Ingresa 1 número entre 1 y 50"))
let número2 = parseInt(prompt("Ingresa otro número entre 1 y 50"))

let i = 1;
while (i <= 50) {
    if (i === número1 || i === número2) {
        console.log(`${i} ¡Lotería!`);
    } else {
        console.log(i);
    }
    i++;
}


// Nota. El formato ${marcador} nos permite insertar un valor dinámico en la cadena. 