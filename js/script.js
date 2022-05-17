// console.log('MSG gerada no arquivo JS!')

// //Declarando variáveis com var
// //Utilizamos o var para criar um escopo global
// var nome = "Alê"

// //Declarando variáveis com let
// //Utilizamos o let para criar variáveis em um escopo local

// function exemploEscopoLocal(){
//     let sobrenome = "Carlos"
//     return sobrenome
// }

// console.log("Nome completo : " + nome + " " + exemploEscopoLocal())

// //Criando constantes
// //Para criar constantes utilizamos a palavra chave const
// //Utilizamos a função querySelector para selecionar o elemento HTML com seletores CSS
// const elemento = document.querySelector("button")

// //Acessando o elemento e alterando o texto
// elemento.innerHTML = "Alterando o texto do elemento"


// //Utilizamos a função querySelectorAll para selecionar todos os elementos do HTML com seletores CSS
// const elementos = document.querySelectorAll("a")

// //Acessando um elemento específico da lista de elementos
// const elemento2 = elementos[3]

// //Alterando o texto do elemento
// elemento2.innerHTML = "Alterando o texto do elemento"

// //Acessando o valor do atributo href do elemento
// console.log(elemento2.getAttribute("href"))
// console.table(elementos)

// //VETORES / ARRAYS
// var frutas = ["Banana", "Maçã", "Uva"]

// //Acessando um elemento específico do vetor
// console.log(frutas[2])

// //Adicionando um elemento no vetor
// frutas.push("Melão")

// //Acessando o elemento do vetor que foi adicionado
// console.log(frutas[3])

// //Acessando o tamanho do vetor
// console.log(frutas.length)

// //Removendo um elemento do vetor
// frutas.pop()

// //Acessando o tamanho do vetor
// console.log(frutas.length)

// //Removendo um elemento do inicio do vetor
// frutas.shift()
// console.log(frutas[0])

// //Imprimindo todos os elementos do vetor
// console.log(frutas)

// //console.table imprime o vetor como uma tabela
// console.table(frutas)

// //Loop for para percorrer o vetor
// for(let i = 0; i < frutas.length; i++){
//     console.log("Valor de i: " + frutas[i])
// }

// //Loop forof para percorrer o vetor
// // O FOR OF não precisa de um contador
// //O FOR OF RECEBE UM OBJETO E PERCORRE OS ELEMENTOS DO OBJETO
// //O FOR OF RETORNA O VALOR DO ELEMENTO
// var carros = ["Fusca", "Gol", "Palio", "Uno"]
// for(let carro of carros){
//     console.log("Valor de fruta: " + carro)
// }

// //Loop forin para percorrer o vetor
// //O FOR IN RETORNARÁ O ÍNDICE DO VETOR
// var verduras = ["Batata", "Cenoura", "Cebola"]
// for(let verdura in verduras){
//     console.log("Indíce dos produtos de verdura: " + verdura)
// }

// //Atrelando um evento de mouse ao elemento, utilizando um EventListener
// //Seria algo como um escutador de eventos.
// //Ele recebe como parâmetros(Evento,função)
// // elementoInput.addEventListener("click",function(){

// //     alert('TESTE')

// // })

//Hoisting - Ocupação de memória
//Elevação de variáveis e funções
// soma()
// nr1 = 10
// console.log(nr1)

//Exemplo de uma função básica
// function soma(){
//      //Declarando variáveis
//         let numero1 = 10
//         let numero2 = 20
//         let resultado = numero1 + numero2
//         console.log(resultado)
//         //Selecionando um elemento HTML e alterando o texto
//         document.querySelector("button").innerHTML = resultado

// }


// //Exemplo de uma função com parâmetros
// function soma(numero1, numero2){
//     //Declarando variáveis
//     let resultado = (parseInt(numero1) + parseInt(numero2))
//     console.log(resultado)
//     //Selecionando um elemento HTML e alterando o texto
//     document.querySelector(".font-google").innerHTML = resultado
// }
// soma("15", "15")

// // //Exemplo de uma função com parâmetros
// function soma(numero1, numero2){
//     //Declarando variáveis
//     let resultado = (parseInt(numero1) + parseInt(numero2))
//     console.log(resultado)

//     //Selecionando um elemento HTML e alterando o texto
//     // com querySelectorAll 
//     const links = document.querySelectorAll("a")
//     console.log(links)

// }

// soma("15", "15")


// // //Exemplo de uma função com parâmetros
// function processandoElemento(elemento,cor){
//     //Declarando constante
//     const elementoSelecionado = document.querySelectorAll(elemento)

//     //Alterando o estilo dos elementos
//     for(let i = 0; i < elementoSelecionado.length; i++){
//         elementoSelecionado[i].style.backgroundColor = cor
//     }

//     //Imprimindo o elemento selecionado com console.log
//     console.log(elementoSelecionado)

// }
//  //Executa a função com o parâmetro processandoElemento
//     //Passando o parâmetro para a função
//     processandoElemento("a", "#fff")

// //Exemplo de uma 
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

// Função que adiciona atributo ao um elemento
function adicionarAtributo(elemento, valor) {
    const elementoSelecionado = document.querySelector(elemento)
    elementoSelecionado.src = valor
}

// Pega o botão pelo id
const btn = document.getElementById("btn")
const colors = ["red", "green"]
let index = 0

// Evento click e estilização do botão
btn.addEventListener("click", onClick);
btn.innerHTML = "CLICK AQUI"
btn.style.fontWeight = "bold"
btn.style.backgroundColor = "#F5DEB3"

// Função para trocar o img, background-color e a escrita do botão
function onClick(){
    btn.style.backgroundColor = colors[index]
    index = index >= colors.length - 1 ? 0 : index + 1;
    if (btn.style.backgroundColor = colors[index] == 'green') {
        adicionarAtributo("#img-lampada", "./img/pic_off.gif");
        btn.innerHTML = "DESLIGADO";
    } else {
        adicionarAtributo("#img-lampada", "./img/pic_on.gif");
        btn.innerHTML = "LIGADO"
    }
}
/* index - Cada vez que o botão é clicado, incrementa o valor na variável index 
ou define de volta para 0.
*/
