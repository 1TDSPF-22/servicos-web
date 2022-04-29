console.log('Hello world')
console.log('msg gerada no body')

//Declarando variáveis com var
//Utilizamos o var para cria escopo global

var nome = "Igor"

//Declarando variáveis com let
//Utilizamos o let para cria escopo global

let sobrenome = "Gabriel"

//Criando constantes
//Para criar constantes, utilizamos a paçavra chave "const"
const elementoInput = document.querySelector("#telClienteId")

//Atrelando um evento de mouse ao elemento, utilizando um Eventlistener
//Seria alog como um escutador de eventos.
//Ele receb como parâmetros (Eveneto, função)
elementoInput.addEventListener("click",function(){

    alert('TESTE')

})