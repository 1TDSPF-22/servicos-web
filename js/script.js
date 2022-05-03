console.log('MSG gerada no arquivo JS!')

//Declarando variáveis com var
//Utilizamos o var para criar um escopo global
var nome = "Alê"

//Declarando variáveis com let
//Utilizamos o var para criar um escopo local
let sobrenome = "Carlos"

function exemploEscopoLocal(){
    let sobrenome = "Carlos"
    console.log(sobrenome)
}

console.log("Nome completo: " + nome + " " + exemploEscopoLocal())

//Criando constantes
//Para criar constantes utulizamos a palavra chave const
//Utilizamos a função querySelector para selecionar o elemento HTML com seletores CSS
const elementoInput = document.querySelector("button")

//Acessando o elemento e alterando o texto
elementoInput.innerHTML = "Alterando o texto do elemento"

//Utilizamos a função querySelectorAll para selecionar todos os elementos do HTML com seletores CSS
const elementos = docuemnt.querySelectorAll("button")

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
console.log(frutas[1])

//Adicionando um elemento no vetor
frutas.push("Melão")

//Acessando o elemento do vetor que foi adicionado
console.log(frutas[3])

//Removendo um elemento do vetor
frutas.pop()

//Loop for para percorrer o vetor
for(let i = 0; i < frutas.length; i++){
    console.log("Valor de i: " + frutas[i])
}

//Loop forof para percorrer o vetor
for(let frut of frutas){
    console.log("Valor de fruta: " + fruta)
}

//Loop forin para percorrer o vetor
var verduras = ["batata", "Cenoura", "Cebola"]
for(let verdura in verduras){
    console.log("Índice de vetores dos produtos: " + verdura)
}

//Imprimindo todos os elementos do vetor
console.log(frutas)

//Imprimindo o vetor como uma tabela
console.table(frutas)


//Atrelando um evento de mouse ao elemento, utiizando um EventListener
//Seria algo como um escutador de eventos
//ele recebe como parâmetros (Evento, função)
//elementoInput.addEventListener("click", function(){

 //   alert('TESTE')

//})