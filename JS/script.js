// evento change; explicado por el profesor 
// document.getElementById("opciones").addEventListener("change", function(event) {
//    console.log(event.target.value);
// });
 

// - - - EVENTO CHANGE - - -

// obtiene los valores del id del documento que se llame opciones y lo guarda en una variable.
const opcion = document.getElementById("opciones");
// obtiene los valores del id del documento que se llame seccionOculta y lo guarda en una variable.
const seccion = document.getElementById("seccionOculta")

// - - - le agrega la opcion el evento - - -
opcion.addEventListener('change',function(){
    // variableOption se llena con los valores de opcion 
    let valueOption = opcion.value;

    // compara si el valor el mayor a 3 
    if (valueOption>=3) {
        // renombra la clase 
        seccion.className = "section-content-final";
    }else{
        seccion.className = "section-content";
    }
});

// - - - Oculta la lista hasta que se ejecute la operacion - - - 

// obtenemos el valor de btn por si id 
const btn = document.getElementById("btn");
const result = document.getElementById("result");

// // cuando haga click quita la clase con el display none
btn.addEventListener("click", ()=>{
    result.classList.remove("section-content");
} );

// - - - - Lista de numeros - - - -
let arreglo = [];

// solamente un for para llenar el arreglo 

// for para generar numeros del 0 al 200
for (let i = 0; i <= 200; i++) {
    // (push) metodo para agregar elementos al arregl
    arreglo.push(i);
}
console.log(arreglo)


// ---- NUMEROS PARES IMPARES, PARES MAYORES Y PARES MENORES 

// NUMERO PAR SI AL DIVIDIRLO POR 2 SU RESIDUO ES 0
// NUMERO IMPAR ES AQUEL QUE AL DIVIDIRLO POR 2 SU RESIDUO NO ES 0 

// - - - - - funcion - -- 

function compararPares(lista){
    return lista.filter(numero => numero % 2 === 0);
}
function compararImpares(numero){
    return numero.filter(numero => numero % 2 !== 0);
}

let numerosPares = compararPares(arreglo);
let numerosImpares = compararImpares(arreglo);

console.log("PARES: ", numerosPares);

console.log("IMPARES: ", numerosImpares);


// - - - mostrar lista - - - 
let lista = document.getElementById("list");

console.log("lista: "+lista);

/* map : crea un arreglo identico, la funcion divide cada elemento y le agrega una etiqueta li, se concatena y finalmente sobreescribor el arreglo*/
arreglo = arreglo.map(etiquetado);

function etiquetado(numero){
    return "<li>|"+numero+"|</li>";
}

console.log("impresion prueba"+arreglo);

// mostrando el arreglo en el codigo html

// convertimos el arreglo en una cadena de texto e incrustamos el lista el codigo html
// las comillas son para sobrescribir la coma que viene por defecto
lista.innerHTML = arreglo.join("");







