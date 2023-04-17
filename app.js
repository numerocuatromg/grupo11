//validación formulario 
//toma el nombre a partir del id
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const consulta = document.getElementById("consulta");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings")

// escuchas un evento cuando se envie

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 6){
        warnings += 'El nombre no es valido <br>'
        entrar = true 
    }//nombre minimo tamaño 6 
    if (!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>';
        entrar = true;
    } //valida mail
    if (tel.value.length<8){
        warnings += 'El teléfono no es valido <br>';
        entrar = true;
    }
    if (consulta.value.length<6){
        warnings += 'La consulta es muy corta <br>';
        entrar = true;
    }
    if (entrar){
        parrafo.innerHTML = warnings;
    }
    else {
        parrafo.innerHTML = "Enviado"
    }
})

//enviar formulario a email 
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this) //guarda datos form
    // recibe url a cual queremos apuntarle q es action del formulario html
    const response = await fetch(this.action, { 
        method: this.method,
        body: form,
        headers: {
            'Accept' : 'application/json'
        } 
    }) 
    if (response.ok){
        this.reset( )
        alert('Gracias por contactarnos')
    }
}