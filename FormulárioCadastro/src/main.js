$(document).ready(function () {
    $('#tel').mask('(00) 00000-0000',{placeholder: '(00) 00000-0000'}, {reverse: true});
    $('#cpf').mask('000.000.000-00',{placeholder: '000.000.000-00'})
    $('#cep').mask('00000-000', {placeholder:'00000-000'});
    
    $('#form-x').validate({
        rules:{
            nome:{
                required: true,
                minlength: 4
            },
            email:{
                required: true
            },
            telefone: {
                required: true
            },
            cpf:{
                required: true
            },
            cep: {
                required: true
            },
            submitHandler: function() {
                alert("Usuário cadastrado");
            },
            invalidHandler: function(validator){
                let error = validator.numberOfInvalids();
                if(error){
                    alert(`Existem ${error} campos incorretos`)
                }
            }
        }
    })
    

    
    // $('#submit').click(function(){
    //     const dados = document.getElementsByClassName('dados-tabble');
    //     const campos = dados.value;
    //     console.log(campos);        
    // })

});