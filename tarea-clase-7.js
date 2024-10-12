/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*/

function validarCiudad (ciudad){
    if(ciudad === ""){
        console.error("Debe seleccionar su ciudad.");
    }else{
        console.log("Se ha validado correctamente la ciudad del usuario.");
    }
}

function validarDescripcionRegalo (descripcion){
    if(descripcion === ""){
        console.error("Debe ingresar una descripción para el regalo.");
    }else{
        console.log("Se ha validado correctamente la descripción del regalo.");
    }
}

document.querySelector("#enviar-carta").onclick = () => {
    let ciudad = document.querySelector("#ciudad").value;
    let descripcion = document.querySelector("#descripcion-regalo").value;
    validarCiudad(ciudad);
    validarDescripcionRegalo(descripcion);
    event.preventDefault();
}
