console.log("Mensagem gerada no arquivo js")


// Declarando variáveis com var
// Utilizamos var para criar com escopo global

var nome = "Hairo"

// Declarando variáveis com let
// Utilizamos let para criar com escopo local

// Criando constantes
// Utilizamos const para criar constantes
// Utilizamos a função querySelector para selecionar o elemento HTML com seletores CSS (sintaxe CSS para encontrar elemento HTML)
const elemento = document.querySelector("button")

// Utilizamos a função querySelectorAll para selecionar todos os elementos HTML com seletores CSS (aplica o script em todos os elementos)
// essa função transforma todos os elementos em um array
const elementos = document.querySelectorAll("a")


const a = elementos[0]
// Devolve o nome do atributo da var especificada
console.log(a.getAttribute("href"))

// Declaração de arrays
var frutas = ["Banana", "Maçã", "Melância"]
// Add elemento ao vetor
frutas.push("Melão")

// Deleta o elemento do vetor
frutas.pop(2)

// Remove o elemento no começo do vetor
frutas.shift

// Imprime o vetor como tabela
console.table(elementos)

// Laços de repetição para percorrer vetor
for(let fruta of frutas){
    console.log(fruta)
}
// Com in ele transforma o contador em índice
for(let fruta in frutas){
    console.log(fruta)
}



// Alteração de texto no elemento
elemento.innerHTML = "Alteração de texto"
a.innerHTML = "Alterado através de um array"

// Atrelando um evento de mouse ao elemento, utilizando um EventListener
// Um scanner de eventos
// Recebe como parâmetros(<Evento (String)>, <função>)

// elementoInput.addEventListener("click", function(){

//     alert('CLICK DETECTADO')

// })


// Declaração de função

function exemploEscopoLocal(){
    let sobrenome = "Newdawn"
    return sobrenome
}

console.log("O nome é: " + nome + " " + exemploEscopoLocal())


