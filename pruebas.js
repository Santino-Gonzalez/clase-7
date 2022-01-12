function tryValidateName() {
    console.assert(
        validateName('') === 'Este campo debe tener al menos un caracter',
        'validateName no validó que el nombre no sea vacío',
    );
  
    console.assert(
        validateName(
            'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll') ===
            "Este campo debe tener menos de 50 caracteres",
        'validateName no validó que el nombre sea menor a 50 caracteres',
    )
    console.assert(
        validateName("123") === "El nombre solo puede contener letras",
        "validateName no valido que el nombre solo contenga letras"
    )
}

tryValidateName()

function  tryValidateCity() {
    console.assert(
        validateCity("") === "Seleccione su locación",
        "validateCity no validó que se seleccione una locación"
    )
} 

tryValidateCity()


function tryValidateGiftDescription() {
    console.assert(
        validateGiftDescription("") === "Este campo debe tener al menos un caracter",
        "validateGiftDescription regalo no validó que la descripción no sea vacía"
    )

  console.assert(
      validateGiftDescription(
        "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") ===
        "Este campo no puede tener mas de 100 caracteres",
        'validateGiftDescription no validó que la descripcion sea menor a 100 caracteres',
    )      
    console.assert(
        validateGiftDescription(",.-") === "La descripcion del regalo solo puede tener letras y numeros",
        "validateGifDescription no valido que la descripcion solo tenga letras y numeros"
    )                      
}

tryValidateGiftDescription()
  