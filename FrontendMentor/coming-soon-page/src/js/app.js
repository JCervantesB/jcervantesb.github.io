// Variables
const btnSubmit = document.querySelector('#submit');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const icon = document.querySelector('#icon');

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', startApp);
    email.addEventListener('blur', validateEmail);
}

function startApp() {
    btnSubmit.disable = true;
}

function validateEmail(e) {
    if(e.target.type === 'email'){
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(regEx.test(e.target.value)) {
            e.target.classList.remove('border-red');
            message.classList.add('hidden');
            icon.classList.add('hidden');            
        } else {
            e.target.classList.add('border-red');
            message.classList.remove('hidden');
            message.textContent = 'Please provide a valid email';
            icon.classList.remove('hidden');
        }
    }
}
