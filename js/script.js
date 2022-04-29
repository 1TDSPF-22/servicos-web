console.log('MSG gerada no arquivo JS!')

// DECLARANDO VARIAVEIS COM VAR
// UTILIZAMOS O VAR PARA CRIAR UM ESCOPO GLOBAL
var nome = "Wesley"

//Declarando variáveis com let
//Utilizamos o let para criar um escopo local
let sobrenome = "Oliveira"

// Criando constantes
// Para criar constantes utilizamos a palavra chave const
const elementoInput = document.querySelector("#telClienteId")


// Atrelando um evento de mouse ao elemento, utilizando um eventListener
// escutador de eventos
//ele recebe como parâmetros(Evento, função)
elementoInput.addEventListener("click",function(){

    alert("TESTE")
})

   

