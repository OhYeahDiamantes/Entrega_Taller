//Ola m llaman Romeo
function mostrarNumeros() {
    const select = document.getElementById("opcion");
    const option = select.value;
    const lim = parseInt(document.getElementById("lim").value);
    const resultado = document.getElementById("resultado");

    let numeros = [];
    let posiciones = [];

    // for debe ejecutar al inicio para el array 




    for (let i = 1; i <= lim; i++) {
        if (option === "Par" && i % 2 === 0) {
            numeros.push(i);
            posiciones.push(numeros.length);
        } else if (option === "Impar" && i % 2 !== 0) {
            numeros.push(i);
            posiciones.push(numeros.length);
        } else if (option === "Par Mayor" && i > lim && i % 2 === 0) {
            numeros.push(i);
            posiciones.push(numeros.length);
        } else if (option === "Impar Mayor" && i > lim && i % 2 !== 0) {
            numeros.push(i);
            posiciones.push(numeros.length);
        }
    }

    // Se supone que esto muestra los resultados en el form, pero no sabría pq solo se puede un for w a a a
    // resultado.innerHTML = "";
    // for (let i = 0; i < numeros.length; i++) {
    //    resultado.innerHTML += `<li>${numeros[i]} - posición ${posiciones[i]}</li>`;
    // }
}

//Joda del botón enviar waos
document.getElementById("boton").addEventListener("click", function(event) {
    event.preventDefault(); // Cancela todo
    mostrarNumeros(); // Muestra los números omg
})

//No he dormido jaja A
//Ahora m doy cuenta de q pareciera q el archivo se ríe: "js.js" brO-