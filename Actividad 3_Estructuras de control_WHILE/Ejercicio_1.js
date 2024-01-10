let número = prompt("Ingresa un número")

let contador = 1;

console.log(`Los múltiplos de 5 hasta ${número} son:`);
while (contador <= número) {
    if (contador % 5 === 0) {
        console.log(contador);
    }

    contador++;
}