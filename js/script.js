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

console.log("Nome completo : " + nome + " " +exemploEscopoLocal)

//Criando constantes
//Para criar constantes utilizamos a palavra chave const
//Utilizamos a função querySelector para selecionar o elemento HTML com seletores CSS
const elemento = document.querySelector("button")

//Acessando o elemento e alterando o texto
elemento.innerHTML = "Alterando o texto do elemento"

//Utilizamos a função querySelectorAll para selecionar todos os elementos HTML com seletores CSS
const elementos = document.querySelectorAll("a")

//Acessando um elemento específico da lista de elementos
const elemento2 = elementos[3]

//alterando o texto do elemento
elemento2.innerHTML = "Alterando o texto do elemento"

//Acessando o valor do atributo href do elemento
console.log(elemento2.getAttribute("href"))
console.table(elementos)

//Vetores / Arrays
var frutas = ["Banana", "Maça", "Uva"]

//Acessando um elemento específico do vetor
console.log(frutas[1])

//Adicionando um elemento ao vetor
frutas.push("Melão")

//Acessando o elemento do vetor que foi adicionado
console.log(frutas[3])

//Removendo um elemento do vetor
frutas.pop() 

//Acessando o tamanho do vetor
console.log(frutas.length)

//Removendo um elemento do início do vetor
frutas.shift()
console.log(frutas[0])

//Imprimindo todos os elementos do vetor
console.log(frutas)

//Console.table imprime o vetor como uma tabela
console.table(frutas)

//Loop for para percorrer o vetor
for(let i = 0; i < frutas.length; i++){
    console.log("Valor de i: " + frutas[i])
}

//Loop forof para percorrer o vetor
//O FOR OF RECEBE UM OBJETO E PERCORRE OS ELEMENTOS DO OBJETO
//O FOR OF RETORNA O VALOR DO ELEMENTO
var carros = ["Fusca" , "Gol", "Palio", "Uno"]
for(let carro of carros){
    console.log("Valor de fruta: " + carro)
}

//Loop forin para percorrer o vetor
//O FOR IN RETORNARÁ O ÍNDICE DO VETOR
var verduras = ["Batata", "Cenoura", "Cebola"]
for(let verdura in verduras){
    console.log("Valor de verdura: " + verduras[verdura])
}

//Atrelando um evento de mouse ao elemento, utilizando um EventListener
//Seria algo como escutador de eventos.
//Ele recebe como parâmetros(Evento, função)
//elementoInput.addEventListener("click",function(){

    //alert('TESTE')
//})