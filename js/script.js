console.log('MSG gerada no arquivo JS!')

//Declarando variáveis com var
//Utilizamos o var para criar um escopo global
var nome = "Alê"

//Declarando variáveis com let
//Utilizamos o var para criar um escopo local
let sobrenome = "Carlos"

//Criando constantes
//Para criar constantes utilizamos a palavra chave const
const elementoInput = document.querySelector("#telClienteId")

//Atrelando um evento de mouse ao elemento, utilizando um EventListener
//Seria algo como um escutador de eventos.
//Ele recebe como parâmetros(Evento,função)
elementoInput.addEventListener("click",function(){

    alert('TESTE!')

})