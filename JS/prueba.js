const opcion = document.getElementById("opciones");

const seccion = document.getElementById('seccionOculta');
console.log(seccion);

console.log(opcion);

opcion.addEventListener('change', function(){
    let valueOption =opcion.value;
    console.log(valueOption)

    if (valueOption>=3) {

        seccion.className="section-content-final";
    }else{
        seccion.className="section-content";
    }
});