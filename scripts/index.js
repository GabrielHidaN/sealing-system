const formEl = document.getElementById('form')

const pswEl = document.getElementById('password-user');
const pswCfmEl = document.getElementById('password-confirm');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    console.log(data)

    password();
    
})

function password (){

    if(pswEl.value != pswCfmEl.value){
        alert('as senhas não coincidem')

    }
}
  


