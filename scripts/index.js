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

   

    function verificaTamanhoMinimoSenha(senha, tamanhoMinimo) {
        return senha.length >= tamanhoMinimo;
      }
    
      
      // Exemplo de uso
      const senha1 = "senha123";
      const senha2 = "abc";
      const tamanhoMinimo = 6;
      
      if (verificaTamanhoMinimoSenha(senha1, tamanhoMinimo)) {
        console.log("Senha válida!");
      } else {
        console.log("Senha muito curta!");
      }
      
      if (verificaTamanhoMinimoSenha(senha2, tamanhoMinimo)) {
        console.log("Senha válida!");
      } else {
        console.log("Senha muito curta!");
      }
    }


