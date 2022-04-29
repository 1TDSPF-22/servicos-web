console.log('MSG gerada no arquivo JS!')

//Declarando variáveis com var
//Utilizamos o var para criar  um escopo global 
var nome = 'Gabriel'

//Declarando variáveis com let
//Utilizamos o let para criar  um escopo global 
 let sobrenome = 'Almeida'

 //Criando constantes
 //Para criar constantes utilizamos a palavra chave const
 const elementoInput = document.querySelector('#telClienteId')

 //Atrelando um evento de mouse ao elemento, utillizando um EventListener
 //Seria algo como escutador de eventos
 //Ele recebe  como parâmetros (Evento, função)
 elementoInput.addEventListener('click',alert('CLICKOU!'))

    alert('Teste')