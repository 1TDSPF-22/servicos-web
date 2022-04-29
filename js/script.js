console.log('MSg gerada no arquivo JS')

//declarando variaveis com var 
//utilizamso o var para criar um esco´po global
var nome = "Alê"

//declarando variaveis com let
//utilizamos o let para criar um escopo local

let sobrenome = 'Carlos'

//criando constantes
//para criar constantes utilizamos a palavra chave const

const elementoInput = document.querySelector("#telClienteId")

//atrelando um evento de mouse ao elemento, utilizando um EventListener
//seria algo como um escutador de eventos
//ele recebe como parâmetros(Evento.função)
elementoInput.addEventListener("click", function(){

    alert('TESTE')
})