const nombre = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const consulta = document.getElementById("consulta");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 6){
        alert("Nombre muy corto");
        warnings += 'El nombre no es valido <br>'
        entrar = true 
    }
    if (!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>';
        entrar = true;
    }
    if (tel.value.length<8){
        warnings += 'El teléfono no es valido <br>';
        entrar = true;
    }
    if (consulta.value.length<8){
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
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
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