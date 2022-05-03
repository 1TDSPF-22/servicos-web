console.log('MSg gerada no arquivo JS')

//declarando variaveis com var 
//utilizamso o var para criar um esco´po global
var nome = "Alê"

//declarando variaveis com let
//utilizamos o let para criar um escopo local



function exemploEscopoLocal(){
    let sobrenome = 'Carlos'
    return sobrenome 
}

console.log("Nome completo : " + nome + " " + exemploEscopoLocal)

//criando constantes
// para criar constantes utilizamos a palavra chave const
//utilizamos a função querySelector para selecionar o elemento HTML com seletores css

const elementoInput = document.querySelector("button")


//Acessando o elemento  e alterado o texto
elemento.innerHTMML = "Alterado o texto"

//utilizamos a função querySelectorAll para selecionar todos os elementos do HTML com seletores css
const elemento = document.quertSelectorAll("a")

//Acessando um elemento especifico da lista de elementos 
const elemento2 = elementos[3]

//Alterando o texto do elemento
elemento[3].innerHTML = "Alterado o texto do elemento"

//Acessando o valor do atributo href do elemento
console.log(elemento2.getAttributo("href"))
console.table(elementos)

//VETORES / ARRAYS
var frutas =["Bannas", "Maçã", "Uva"]

//Acessando um elemento específico do vetor
console.log(frutas[1])

//Adicionando um elemento no vetor
frutas.push("Melão")

//Acessando um elemento no vetor que foi adicionado
console.log(frutas[3])

//Acessando o tamanho do vetor 
console.log(frutas.length)

//Removendo um elemento do vetor 
frutas.pop()

//Acessando o tamanho do vetor 
console.log(frutas.length)

//Removendo um elemento  inicio do vetor
frutas.shift()
console.log(frutas[0])

//Imprimindo todos os elementos do vetor
console.log(frutas)

//console.table imprime o vetor como uma tabela
console.table(frutas)

//Loop for para percorrer o vetor
for(let i = 0;  i < frutas.length; i++){
    console.log("Valor de i: " + frutas[i])
}
var carros = ["Fusca", "Gol", "Palio", "Uno"]
//Loop forof para percorrer o vetor
//O for of recebe um objeto e percorre os elementos do objeto
//O for of retorna o valor do elemento
for(let carro of carros){
    console.log("Valor de carro: " + carro)
}

//Loop forin para pencorrer o vetor
//O for in retornará o indice do vetor 
var verduras = ["Batatas", "Cenouras", "Cebola"]
for(let verdura in verduras){
    console.log("Indice dos produtos de verdura: " + verduras[verdura])
}

//atrelando um evento de mouse ao elemento, utilizando um EventListener
//seria algo como um escutador de eventos
//ele recebe como parâmetros(Evento.função)
//elementoInput.addEventListener("click", function(){

   // alert('TESTE')
})