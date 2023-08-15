const formEl = document.getElementById('form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    console.log(data)
})

