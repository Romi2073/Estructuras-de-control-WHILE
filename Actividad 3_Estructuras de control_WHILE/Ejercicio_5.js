let dia = '';

while (dia.toLowerCase() !== 'domingo') {
    dia = prompt('Ingrese un día de la semana');

    switch (dia.toLowerCase()) {
        case 'lunes':
            alert("¡Excelente inicio de semana! Lo estás haciendo bien");
            break;
        case 'martes':
            alert("¡Ten un hermoso día!");
            break;
        case 'miércoles':
        case 'miercoles':
            alert("¡Luces espectacular! Recuerda ser amable contigo y con las personas que te rodean");
            break;
        case 'jueves':
            alert("¡Día de consentirse con un coffee!");
            break;
        case 'viernes':
            alert("Gracias a Dios que es viernes ^^");
            break;
        case 'sábado':
        case 'sabado':
            alert("Día de divertirse :D");
            break;
        case 'domingo':
            alert('Ve a descansar.');
            break;
        default:
            alert("Un día más es una nueva oportunidad para sonreír :D");
            break;
    }
}



