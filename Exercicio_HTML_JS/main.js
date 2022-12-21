const form = document.querySelector(".form-nums");
const numA = document.getElementById("numA");
const numB = document.getElementById("numB");

function validA(a, b){
    if(a >  b) {
        return true
    }
}

form.addEventListener('submit', function(e){
    let validForm = false;
    e.preventDefault();

    let successMessage = `O Numéro A: ${numA.value} é maior que o Número B: ${numB.value}, portanto Formulário <b>Válido</b>`;
    let errorMessage = `O Número A: ${numA.value} é menor que o Número B: ${numB.value}, portanto Formulário <b>Inválido</b>`;
    let equalMessage = `Números Iguais`

    validForm = validA(numA.value, numB.value);
    if(numA.value === numB.value){
        document.getElementById('msg').classList.remove("msg-error")
        document.querySelector('.msg-success').classList.remove("msg-success");
        document.getElementById('msg').classList.add("equal-msg")
        document.getElementById('msg').innerHTML = equalMessage;
        numA.value = '';
        numB.value = '';
    } else {
        if(validForm) {
            document.getElementById('msg').classList.remove("equal-msg");
            document.getElementById('msg').classList.remove("msg-error")
            document.getElementById('msg').classList.add("msg-success");
            document.getElementById('msg').innerHTML = successMessage;
            numA.value = '';
            numB.value = '';
        } else {
            document.getElementById('msg').classList.remove("equal-msg");
            document.querySelector('.msg-success').classList.remove("msg-success");
            document.getElementById('msg').classList.add("msg-error");
            document.getElementById('msg').innerHTML = errorMessage;
            numA.value = '';
            numB.value = '';
        }
    }
})

form.addEventListener('click', function(e){
    document.getElementById('msg').innerHTML = '';
})
