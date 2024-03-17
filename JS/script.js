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

//Poison en Italiano m dio poderes dea

function compararPares(lista){
    let numerosPares = lista.filter(numero => numero % 2 === 0);
    let listaPares = document.getElementById("listPares");
    listaPares.innerHTML = numerosPares.map(numero => `<li>|${numero}|</li>`).join("");
}

function compararImpares(lista){
    let numerosImpares = lista.filter(numero => numero % 2 !== 0);
    let listaImpares = document.getElementById("listImpares");
    listaImpares.innerHTML = numerosImpares.map(numero => `<li>|${numero}|</li>`).join("");
}

btn.addEventListener("click", () => {
    const opcion = document.getElementById("opciones").value;
    
    // Ocultar ambas secciones al principio
    document.getElementById("listPares").style.display = "none";
    document.getElementById("listImpares").style.display = "none";
    
    // Mostrar la sección correspondiente según la opción seleccionada
    if (opcion === "1" || opcion === "3") {
        compararPares(arreglo);
        document.getElementById("listPares").style.display = "block";
    } else if (opcion === "2" || opcion === "4") {
        compararImpares(arreglo);
        document.getElementById("listImpares").style.display = "block";
    }
});

// <---- Sección par e impar mayor ---->









