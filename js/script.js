console.log('MSG gerada no arquivo JS!')

//Declarando variáveis com var
//Utilizamos o var para criar um escopo global
var nome = "Alê"

//Declarando variáveis com let
//Utilizamos o let para criar variáveis em um escopo local

function exemploEscopoLocal(){
    let sobrenome = "Carlos"
    return sobrenome
}

console.log("Nome completo : " + nome + " " + exemploEscopoLocal())

//Criando constantes
//Para criar constantes utilizamos a palavra chave const
//Utilizamos a função querySelector para selecionar o elemento HTML com seletores CSS
const elemento = document.querySelector("button")

//Acessando o elemento e alterando o texto
elemento.innerHTML = "Alterando o texto do elemento"


//Utilizamos a função querySelectorAll para selecionar todos os elementos do HTML com seletores CSS
const elementos = document.querySelectorAll("a")

//Acessando um elemento específico da lista de elementos
const elemento2 = elementos[3]

//Alterando o texto do elemento
elemento2.innerHTML = "Alterando o texto do elemento"

//Acessando o valor do atributo href do elemento
console.log(elemento2.getAttribute("href"))
console.table(elementos)

//VETORES / ARRAYS
var frutas = ["Banana", "Maçã", "Uva"]

//Acessando um elemento específico do vetor
console.log(frutas[2])

//Adicionando um elemento no vetor
frutas.push("Melão")

//Acessando o elemento do vetor que foi adicionado
console.log(frutas[3])

//Acessando o tamanho do vetor
console.log(frutas.length)

//Removendo um elemento do vetor
frutas.pop()

//Acessando o tamanho do vetor
console.log(frutas.length)

//Removendo um elemento do inicio do vetor
frutas.shift()
console.log(frutas[0])

//Imprimindo todos os elementos do vetor
console.log(frutas)

//console.table imprime o vetor como uma tabela
console.table(frutas)

//Loop for para percorrer o vetor
for(let i = 0; i < frutas.length; i++){
    console.log("Valor de i: " + i)
}


for(let fruta of fruta){
    console.log("Valor de i: " + fruta)
}


//Atrelando um evento de mouse ao elemento, utilizando um EventListener
//Seria algo como um escutador de eventos.
//Ele recebe como parâmetros(Evento,função)
// elementoInput.addEventListener("click",function(){

//     alert('TESTE')

// })