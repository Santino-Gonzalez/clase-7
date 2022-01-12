const $form = document.querySelector("#letter-to-santa")

function validateName(name) {
    if (name.length === 0){
        return "Este campo debe tener al menos un caracter"
    }
    if(!/^[a-z]+$/i.test(name)){
        return "El nombre solo puede contener letras"
    }
    if (name.length > 50) {
        return "Este campo debe tener menos de 50 caracteres"
    }
    return ""
}

function validateGiftDescription (giftDescription) {
    if (giftDescription.length === 0) {
        return "Este campo debe tener al menos un caracter"
    }
    if(!/^[a-z0-9 ]+$/i.test(giftDescription)){
        return "La descripcion del regalo solo puede tener letras y numeros"
    }
    if (giftDescription.length > 100) {
        return "Este campo no puede tener mas de 100 caracteres"
    }
    return ""
}


function validateCity (city) {
    if (city.length === 0) {
        return "Seleccione su locación"
    }
    
    return ""
}

function handleMistakes (mistakes){
    if(document.querySelectorAll(".mistakeText").length > 0){
        const $mistakeText = document.querySelectorAll(".mistakeText")
        for(let i=0; i < $mistakeText.length; i++){
            $mistakeText[i].remove()
        }
    }
    const keys = Object.keys(mistakes)
    let amountOfMistakes = 0

    keys.forEach(function(key){
        const mistake = mistakes[key]
        const $mistakes = document.querySelector("#mistakes")

        if(mistake){
            amountOfMistakes++
            $form[key].className = "mistake"

            const $mistake = document.createElement("li")
            $mistake.className = "mistakeText"
            $mistake.innerText = mistake
            $mistakes.appendChild($mistake)
        }else{
            $form[key].className = ""
        }
    
    })
    return amountOfMistakes
}

$form.onsubmit = function validateForm(event){
    const $name = $form.name.value
    const city = $form.city.value
    const giftDescription = $form["gift-description"].value

    const mistakeName = validateName($name)
    const mistakeCity = validateCity(city)
    const mistakeGiftDescription = validateGiftDescription(giftDescription)

    const mistakes = {
        city: mistakeCity,
        name: mistakeName,
        "gift-description": mistakeGiftDescription
    }

    const isSuccess = handleMistakes(mistakes) === 0

    if(isSuccess){
        document.querySelector("#succes").className = ""
        $form.className = "hidden"

        setTimeout(function(){
            window.location.href = "wishlist.html"
        }, 5000)
    }else{
        document.querySelector("#succes").className = "hidden"
    }
    event.preventDefault()
}


