// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners(){
    // Cuando el app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    // Reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);
    // Enviar email
    formulario.addEventListener('submit', enviarEmail);
}

function iniciarApp(){
    btnEnviar.disable = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Funciones
function validarFormulario(e) {
    if(e.target.value.length > 0) {
        //Elimina los errores...
        const error = document.querySelector('p.error');
        if(error) { error.remove(); }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }
    if(e.target.type === 'email'){        
        if(er.test(e.target.value)) {
            //Elimina los errores...
            const error = document.querySelector('p.error');
            if(error) { error.remove(); }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
            iniciarApp();
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no válido');
            iniciarApp();
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disable = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('P');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    //.length solo existe en la coleccion de elementos de querySelectorAll y no en querySelector
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}

// Envia el email
function enviarEmail(e) {
    e.preventDefault();

    // Mostrar spiner img
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Despues de 3 segundos ocultar el spinner y mostrar mensaje
    setTimeout(() => {
        spinner.style.display = 'none';

        // Mensaje de enviado correctamente
        const parrafo = document.createElement('P');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
        // Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);


        // Eliminar el mensaje despues de 5segundos
        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();            
        }, 5000);
    }, 3000);
}

// Función que resetea el formulario

function resetearFormulario(e) {
    e.preventDefault();
    formulario.reset();
    iniciarApp();
}