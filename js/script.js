
function validarNome(){
    var nome = document.getElementById('nome').value;
    if(nome === ''){
         return false
    } else{
         return true
    }
}
function validarEmail(){
    var email = document.getElementById('email').value;
    if(email == ''){
        return false
    }else{
        
        return true
    }
}
function validarGenero(){
    var genero = document.getElementById('genero').value
    if(genero == ''){
        return false
    }else{
        
        return true
    }
}
function validarData_nascimento(){
    var data_nascimento = document.getElementById('data_nascimento').value
    if(data_nascimento == ''){
        return false
    }else{
        
        return true
    }
}
function ValidarMotivo(){
    var motivo = document.getElementById('motivo').value
    if(motivo == ''){
        return false
    }else{
        
        return true
    }
}

function validarTudo(){
    if(validarNome() && validarEmail() &&validarData_nascimento() && validarGenero() && ValidarMotivo()){
        
        alert("Parabéns! o senhor(a) se candidatou para o SpaceTour!")
        return true
    }else{
        alert("O senhor(a) Precisa Preencher todos os campos corretamente para se cadastrar!")
        return false
    }

}



