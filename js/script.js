// console.log("Mensagem gerada no arquivo js")


// // Declarando variáveis com var
// // Utilizamos var para criar com escopo global

// var nome = "Hairo"

// // Declarando variáveis com let
// // Utilizamos let para criar com escopo local

// // Criando constantes
// // Utilizamos const para criar constantes
// // Utilizamos a função querySelector para selecionar o elemento HTML com seletores CSS (sintaxe CSS para encontrar elemento HTML)
// const elemento = document.querySelector("button")

// // Utilizamos a função querySelectorAll para selecionar todos os elementos HTML com seletores CSS (aplica o script em todos os elementos)
// // essa função transforma todos os elementos em um array
// const elementos = document.querySelectorAll("a")


// const a = elementos[0]
// // Devolve o nome do atributo da var especificada
// console.log(a.getAttribute("href"))

// // Declaração de arrays
// var frutas = ["Banana", "Maçã", "Melância"]
// // Add elemento ao vetor
// frutas.push("Melão")

// // Deleta o elemento do vetor
// frutas.pop(2)

// // Remove o elemento no começo do vetor
// frutas.shift

// // Imprime o vetor como tabela
// console.table(elementos)

// // Laços de repetição para percorrer vetor
// for(let fruta of frutas){
//     console.log(fruta)
// }
// // Com in ele transforma o contador em índice
// for(let fruta in frutas){
//     console.log(fruta)
// }



// // Alteração de texto no elemento
// elemento.innerHTML = "Alteração de texto"
// a.innerHTML = "Alterado através de um array"

// // Atrelando um evento de mouse ao elemento, utilizando um EventListener
// // Um scanner de eventos
// // Recebe como parâmetros(<Evento (String)>, <função>)

// // elementoInput.addEventListener("click", function(){

// //     alert('CLICK DETECTADO')

// // })


// // Declaração de função

// function exemploEscopoLocal(){
//     let sobrenome = "Newdawn"
//     return sobrenome
// }

// console.log("O nome é: " + nome + " " + exemploEscopoLocal())

// Exemplo de função básica:
// function soma(){
//     let a = 10;
//     let b = 20;
//     let result = a + b
//     console.log(result)
//     document.querySelector("button").innerHTML = result
// }

// Exemplo de função com parâmetro:
// function soma(a, b){
//     let result = (parseInt (a) + parseInt(b))
//     console.log(result)
//     // Exemplo com querySelector
//     // document.querySelector("button").innerHTML = result

//     // Exemplo com querySelectorAll
//     const botoes = document.querySelectorAll("a")

//     console.table(botoes);

// }

// // Exemplo de função com query selector all
// function processandoElemento(elemento, cor){
//     // Declarações
//     let estilo = cor
//     const elementoSelecionado = document.querySelectorAll(elemento)

//     console.log(elementoSelecionado)
    
//     // Alterando cor de fundo dos elementos
//     for(let i = 0; i < elementoSelecionado.length; i++){
//         elementoSelecionado[i].style.backgroundColor = estilo
//     }

// }

// Exemplo de função que add atributos a um elemento
function adicionarAtributo(elemento, valor){
    // Declaração de constante
    const elementoSelecionado = document.querySelectorAll(elemento)
    for(let i = 0; i < elementoSelecionado.length; i++){
        elementoSelecionado[i].src = valor
    }

}
// //Exemplo de uma função que adiciona atributos a um elemento
// function adicionarAtributo(elemento, valor){
//     //Declarando constante
//     const elementoSelecionado = document.querySelectorAll(elemento)
//     console.log(elementoSelecionado)
//         // for(let i = 0; i < elementoSelecionado.length; i++){
//         //     elementoSelecionado[i].src = valor
//         // }
        
//         elementoSelecionado[Math.round(Math.random()+1)].src = valor

//  }
//     //Executa a função com o parâmetro adicionarAtributo
//     //Passando o parâmetro para a função
//     adicionarAtributo("div ul li img","./img/mail.png")

//Exercício da Lâmpada
//Crie um programa que simule a luz de uma lâmpada.
/*
    1. Crie 2 botões, um para ligar e outro para desligar a lâmpada.
    2. Crie uma div e adicione um elemento img com o id "img-lampada"
    3. Crie um evento para o botão ligar, que adicione o atributo src da imagem com o valor "img/lampada-acesa.png"
    4. Crie um evento para o botão desligar, que adicione o atributo src da imagem com o valor "img/lampada-apagada.png"

*/


