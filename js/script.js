console.log('Mensagem gerada no arquivo JS!')

var nome = "Yasmin"

function exemploEscopoLocal(){
    let sobrenome = "Dias"
    return sobrenome
}

console.log("Nome completo : " + nome + " " + exemploEscopoLocal())

const elemento = document.querySelector("button")

elemento.innerHTML = "Alterando o texto do elemento "

const elementos = document.querySelectorAll("a")

const elemento2 = elementos[3]

elemento2.innerHTML = "Alterando o texto do elemento"

console.log(elemento2.getAttribute("href"))
console.table(elementos)

var frutas = ["Banana", "Maçã", "Uva"]

console.log(frutas[2])

frutas.push("Melão")

console.log( frutas [3])

console.log.apply(frutas.length)

frutas.pop()

console.log(frutas.length)

frutas.shift()
console.log(frutas[0])

console.log(frutas)

console.table(frutas)

for(let i = 0; i < frutas.length; i++) {
    console.log("Valor de i: " + frutas[i])
}

var carros = ["Fusca", "Gol", "Palio", "Uno"]
for(let carro of carros) {
    console.log("Valor de fruta: " + carro)
}

var verduras = ["Batata","Cenoura", "Cebola"]
for (let verdura in verduras){
    console.log("índice dos produtos de verdura: " + verdura)
}

